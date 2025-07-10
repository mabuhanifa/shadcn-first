import { handlers } from "@/auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
const nextAuthResult = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
});

export const { handlers, auth, signIn, signOut } = nextAuthResult;
console.log("NextAuth handlers:", nextAuthResult.handlers); // Log the handlers object

// Add back the logs/checks for debugging the import in this file
console.log("Imported handlers in route.ts:", handlers);

if (!handlers) {
  console.error(
    "Error: handlers imported from '@/auth' is undefined or null in route.ts."
  );
  // Depending on your setup, you might want to throw an error here
  // throw new Error("Failed to import NextAuth handlers");
}

export const { handlers, auth, signIn, signOut } = nextAuthResult;
export const { GET, POST } = handlers;
