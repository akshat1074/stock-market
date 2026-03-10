// lib/auth.ts
import "@/database/mongoose"; 
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import mongoose from "mongoose";

// Connect synchronously at startup — not lazily
const db = mongoose.connection.db;

export const auth = betterAuth({
  database: mongodbAdapter(db as any),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
    disableSignUp: false,
    requireEmailVerification: false,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    autoSignIn: true,
  },
  plugins: [nextCookies()],
});

export type Session = typeof auth.$Infer.Session;