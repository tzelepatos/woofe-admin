import clientPromise from "@/app/lib/mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { UserModel, ActivationModel } from "@/app/models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { cookies } from "next/headers";

// Define the admin email
const ADMIN_EMAIL = "tzelepatos@gmail.com";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  // adapter: MongoDBAdapter(clientPromise),

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
          image: profile.picture.data.url, //????
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
          // if (!user.emailVerified) {
          //   throw new Error("User not activated. Please check your email.");
          // }

          console.log("Provided password:", password);
          console.log("Stored password:", user.password);
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
    async signIn({ user, profile }) {
      console.log("signIn profile: ", profile);
      console.log("signIn user: ", user);
      try {
        mongoose.connect(process.env.MONGODB_URI);
        const userId = profile ? profile.id : user.id;
        const userEmail = profile ? profile.email : user.email;
        const userName = profile ? profile.name : user.name;
        const userImage = profile ? profile.picture : user.image;
        const userRole = userEmail === ADMIN_EMAIL ? "admin" : "user";

        const userExists = await UserModel.exists({ email: userEmail });

        if (!userExists) {
          const newUser = await UserModel.create({
            _id: userId,
            name: userName,
            email: userEmail,
            image: userImage,
            role: userRole,
            provider: profile ? "google" : "credentials",
            phone: "",
          });
          console.log("newUser: ", newUser);
        }
        cookies().set("user", user.id, { secure: true });
        return true;
      } catch (error) {
        console.error("signIn error:", error);
        return false;
      }
    },
    async jwt({ token, user, trigger, session }) {
      // console.log("jwt token: ", token);
      // console.log("jwt user: ", user);
      // console.log("jwt trigger: ", trigger);
      // console.log("jwt session: ", session);
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      if (trigger === "update") {
        // console.log("session trigger: ", trigger);
        if (session?.name) {
          token.name = session.name;
          // console.log("token.name update: ", token.name);
        }
        if (session?.image) {
          token.image = session.image;
          // console.log("token.image update: ", token.image);
        }
        if (session?.role) {
          token.role = session.role;
          // console.log("token.role update: ", token.role);
        }
        // Connect to the database
        mongoose.connect(process.env.MONGODB_URI);

        // Find the user in the database by ID and update the name, image, and role
        await UserModel.findByIdAndUpdate(token.id, {
          name: token.name,
          image: token.image,
          role: token.role,
        });
      }

      return token;
    },

    async session({ session, token }) {
      // console.log("session token: ", token);
      // console.log("session session: ", session);
      mongoose.connect(process.env.MONGODB_URI);
      const sessionUser = await UserModel.findOne({
        email: session.user.email,
      });
      session.user.name = token.name || sessionUser.name;
      session.user.id = sessionUser._id;
      session.user.role = token.role || sessionUser.role;
      session.user.provider = sessionUser.provider;
      session.user.image = token.image || sessionUser.image;

      return session;
    },
  },
  pages: {
    signIn: "/log-in",
  },
  secret: process.env.NEXTAUTH_SECRET,

  // debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
