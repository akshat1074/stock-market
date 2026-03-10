// database/mongoose.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) throw new Error("Missing MONGODB_URI");

// Cache connection across hot reloads in dev
const cached = global as typeof globalThis & {
  mongoose?: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null }
};

if (!cached.mongoose) {
  cached.mongoose = { conn: null, promise: null };
}

if (!cached.mongoose.promise) {
  cached.mongoose.promise = mongoose.connect(MONGODB_URI).then((m) => m);
}

await cached.mongoose.promise;
cached.mongoose.conn = mongoose;

export const connectToDatabase = async (): Promise<typeof mongoose> => {
  if (mongoose.connection.readyState >= 1) return mongoose;
  await mongoose.connect(MONGODB_URI);
  return mongoose;
};


export default mongoose;