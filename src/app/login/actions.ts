"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/lib/routes";
import type { LoginType } from "@/app/login/types";
import { literals } from "@/lib/literals";

export async function postLogin(credentials: LoginType) {
  const { email, password } = credentials;
  return signIn("credentials", {
    email,
    password,
    redirect: false,
  }).catch((error) => {
    console.log("loginAction", error);
    if (error instanceof AuthError) {
      const { type, cause } = error;
      switch (type) {
        case "CredentialsSignin":
          throw literals.invalidCredentials;
        case "CallbackRouteError":
          throw cause?.err?.toString();
        default:
          throw literals.genericError;
      }
    }
    throw error;
  });
}
