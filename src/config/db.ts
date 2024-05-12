import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://srivastava4nishant:Rel3N445Dq4nlbp8@cluster0.htvcyo7.mongodb.net/");
    console.log("MongoDB Connected...");
  } catch (error) {
    if (error instanceof Error) {
      console.error("MongoDB connection failed:", error.message);
    } else {
      console.error("MongoDB connection failed:", error);
    }
  }
};

export default connectDB;
