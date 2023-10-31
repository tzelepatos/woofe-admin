import clientPromise from "@/app/lib/mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { UserModel } from "@/app/models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

// Define the admin email
const ADMIN_EMAIL = "tzelepatos@gmail.com";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  adapter: MongoDBAdapter(clientPromise),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.email === ADMIN_EMAIL ? "admin" : "user", // Check if the email is admin's email
        };
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture.data.url,
          role: profile.email === ADMIN_EMAIL ? "admin" : "user", // Check if the email is admin's email
        };
      },
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // email: { label: "Email", type: "email" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          mongoose.connect(process.env.MONGODB_URI);
          console.log("Checking credentials", credentials);
          const user = await UserModel.findOne({ email });

          if (!user) {
            console.log("User not found.");
            return null;
          }
          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) {
            console.log("Password incorrect.");
            return null;
          }
          console.log("Valid credentials.");
          return user;
        } catch (error) {
          console.error("error:", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.role = user.role;
      }
      if (trigger === "update" && session?.name) {
        token.name = session.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.role = token.role;
      session.name = token.name;
      return session;
    },
  },
  pages: {
    signIn: "/log-in",
  },
  secret: process.env.NEXTAUTH_SECRET,

  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
