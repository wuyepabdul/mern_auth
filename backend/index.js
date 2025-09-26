import express from "express";
import { connectDb } from "./db/connectDb.js";
import dotenv from "dotenv";
import authRoutes from "../backend/routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API");
});

app.use(express.json()); // allows us to parse incoming requests from req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDb();
  console.log(`Server running on port ${port}`);
});
