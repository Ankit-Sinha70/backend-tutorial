import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    
    const response = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${DB_NAME}`
    );
    console.log("MongoDB connected");
    return response
  } catch (error) {
    console.error("Mongodb connection failed", error);
  }
};

export default connectDB;
