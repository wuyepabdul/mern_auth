import express from "express";
import { connectDb } from "./db/connectDb.js";
import dotenv from "dotenv";
import authRoutes from "../backend/routes/auth.route.js";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("API");
});

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectDb();
  console.log(`Server running on port ${3000}`);
});
