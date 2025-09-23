import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to ${conn.connection.host}`);
  } catch (error) {
    console.log("db connection error => ", error.message);
    process.exit(1); // 1 is failure 0 is success
  }
};
