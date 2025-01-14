import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { decrypt } from "./app/lib/session";

const protectedRoutes = ["/admin"];
const publicRoutes = ["/login", "/onboard"];

export default async function middleware(req) {
    //zaczynamy od sprawdzenia czy ścieżka jest chroniona czy publiczna
    const path = req.nextUrl.pathname;

    if (path.startsWith('/api')) {
      return NextResponse.next();
    }

    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    //jeśli ścieżka jest chroniona, sprawdzamy czy użytkownik jest zalogowany
    const cookieStore = await cookies();
    const cookie =  cookieStore.get("session")?.value;    

    if (!cookie) {
        console.error("Brak ciasteczka sesji.");
    }
    else{
        const session = await decrypt(cookie);

        if (isProtectedRoute && !session?.userId) {
            return NextResponse.redirect(new URL("/login", req.nextUrl));
          }
        
          if (isPublicRoute && session?.userId) {
            return NextResponse.redirect(new URL("/admin", req.nextUrl));
          }
    }
    
  return NextResponse.next();
}

    