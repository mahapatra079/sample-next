import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"],
};

// Proxy only checks that a token exists, not whether it is valid.

// In my application, I can use Next.js middleware to protect private routes. 
// The middleware checks the authentication token from the cookie before allowing the request to continue.
// If the token is missing or invalid, I redirect the user to the login page.
// I can also use middleware for role-based authorization, redirects, and request handling


// Middleware is an intermediate layer that intercepts a request or action before it reaches its final handler. 
// In frontend applications, it can be used for authentication, authorization, route protection, redirects, logging, request modification, and state-management operations.
// For example, in Next.js, middleware can check whether a user has a valid authentication token before allowing access to a protected route.