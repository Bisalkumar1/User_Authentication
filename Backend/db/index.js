import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";

const connectDb = async () => {
  try {
    console.log("mongo in db ", process.env.MongoDB_Url);

    const connectionInstance = await mongoose.connect(
      `${process.env.MongoDB_Url}${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectDb;
