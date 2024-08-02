import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import express from "express";
import cors from "cors";
import { Limit } from "./constants.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);




app.use(express.json({ Limit }));
app.use(express.urlencoded({ extended: true, limit: Limit }));
app.use(express.static("public"));

import connectDb from "../db/index.js";

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!! ", err);
  });


import userRouter from "../routes/users.js";
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "server working fine" });
});

export default app;
