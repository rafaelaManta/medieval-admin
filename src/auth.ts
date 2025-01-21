import "next-auth/jwt";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { post } from "@/fetch/methods";
import type { ILoginResponse } from "@/app/login/types";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken: string;
      id: number;
      email: string;
      name: string;
    };
  }
  interface JWT {
    token: {
      accessToken?: string;
    };
  }
  interface User {
    accessToken: string;
  }
}

export const { handlers, signIn, auth } = NextAuth({
  debug: !!process.env.AUTH_DEBUG,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = credentials;
          const response = await post<ILoginResponse>(
            "/admin/login",
            { email, password },
            { shouldAddToken: false },
          );
          if (response && response.token && response.user) {
            return {
              id: response.user.id,
              email: response.user.email,
              name: response.user.name,
              accessToken: response.token,
            };
          }
          return null;
        } catch (e) {
          console.error("authorizeError", e);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      if (token && token.accessToken) {
        session.user = {
          ...session.user,
          accessToken: token.accessToken as string,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user && user.accessToken) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
  },
});
