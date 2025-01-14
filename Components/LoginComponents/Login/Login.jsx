'use client'
import {useActionState } from "react";
import { FormTitle } from "../LoginUIComponents/LoginUIComponents";
import '@/Components/LoginComponents/Login/Login.css'
import login from "@/app/lib/login";

export default function Login() {
    const [state, loginAction] = useActionState(login, undefined);

  return (
      <div className='login-tab-container'>
        <FormTitle title="CarFit " subtitle="Login into your account"/>

        <form className='login-tab-container-form' action={loginAction}>
            <input type="email" placeholder="E-mail" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
    
            <button className="login-tab-container-form-button">LOGIN</ button>
        </form>
    </div>
  );
}
