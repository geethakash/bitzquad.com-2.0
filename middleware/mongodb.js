import mongoose from "mongoose";

if (!process.env.MONGODBURL) throw new Error("MONGODBURL is not defined");

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function Connect(url = null) {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(url ? url : process.env.MONGODBURL, options)
      .then((mongoose) => {
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default { Connect };
