import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { MONGO_URL } = process.env;
    if (!MONGO_URL) throw new Error("Mongo Url is not set");

    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo connected successfully", conn.connection.host);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
