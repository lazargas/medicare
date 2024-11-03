import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { postUser } from "@/lib/api";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
     async signIn({user, account, profile}) {
       await postUser(user);
       return true;
    }
  }
});