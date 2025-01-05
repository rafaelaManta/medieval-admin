import "next-auth/jwt";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { post } from "@/fetch/methods";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken?: string;
    };
  }
  interface JWT {
    token: {
      accessToken?: string;
    };
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: !!process.env.AUTH_DEBUG,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore
      authorize: async (credentials) => {
        try {
          const { email, password } = credentials;
          const response = await post(
            "/admin/login",
            { email, password },
            { shouldAddToken: false },
          );
          // @ts-ignore
          const user = { accessToken: response?.token as string };
          return user ?? null;
        } catch (e) {
          console.error("authorizeError", e);
          // throw e;
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
        // @ts-ignore
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
    async jwt({ token, user }) {
      // @ts-ignore
      if (user && user.accessToken) {
        // @ts-ignore
        token.accessToken = user.accessToken;
      }
      return token;
    },
  },
});
