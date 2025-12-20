import mongoose from "mongoose"
import { cache } from "react";

const MONGOB_URI = process.env.MONGODB_URI;

declare global {
    var mongooseCache:{
        conn: typeof mongoose| null;
        promise:Promise<typeof mongoose> | null;

    }
}

let cached = global.mongooseCache;

if(!cached){
    cached = global.mongooseCache = {conn:null , promise:null};
}

export const connectToDatabase = async() =>{
    if(!MONGOB_URI) throw new Error ('MONGODB_URI must be set within .env');

    if(cached.conn) return cached.conn;

    if(!cached.promise){
        cached.promise = mongoose.connect(MONGOB_URI,{bufferCommands:false})
    }

    try{
        cached.conn = await cached.promise;
    } catch(err){
        cached.promise = null ;
        throw err;
    }

   console.log(`Connected to databasem ${process.env.NODE_ENV} - ${MONGOB_URI}`) ;

   return cached.conn
}