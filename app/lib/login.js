'use server';
import bcrypt from 'bcrypt';
import prisma from '@/pages/api/prismaConnection';
import { createSession } from './session';
import { redirect } from 'next/navigation';
import {z} from 'zod';

export default async function login(prevState, formData) {
    //getting data from formData
    const email = formData.get('email');
    const password = formData.get('password');

    //schema for user data validation
    const User = z.object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(8, "Password must be at least 8 characters long"),
    });

    //validating user data
    User.safeParse({email, password});

    //checking if user with given email exists
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, password: true },
    });

    //compare created hash with hash stored in database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.error("Invalid password");
      return({error:"Invalid password"});
    }

    //creating session and redirecting to admin panel
    await createSession(user.id);
    redirect('/admin');
  }