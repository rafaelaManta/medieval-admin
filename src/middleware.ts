import { auth } from "@/auth";
import {
  apiAuthPrefix,
  authRoute,
  DEFAULT_LOGIN_REDIRECT,
  DEFAULT_UNAUTHORIZED_REDIRECT,
} from "@/lib/routes";

// @ts-ignore
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth?.user?.accessToken;
  const isApiAuthPrefix = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isAuthRoute = nextUrl.pathname.startsWith(authRoute);
  if (isApiAuthPrefix) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn) {
    return Response.redirect(new URL(DEFAULT_UNAUTHORIZED_REDIRECT, nextUrl));
  }
  return null;
});

// everything you put inside the matcher is
// going to be used to invoke the auth function
// it doesn't mean that the route is protected or public
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
