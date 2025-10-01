import express from "express";
import { connectDb } from "./db/connectDb.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(`Welcome to MERN Advanced Auth API at :  ${process.env.CLIENT_URL}`);
});

const corsConfig = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
};

app.use(cors(corsConfig));
app.options("", cors(corsConfig));

/* app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  console.log("CORS headers applied for:", req.method, req.path);
  next();
}); */

app.use(express.json()); // allows us to parse incoming requests from req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);

connectDb();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
/* 
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app;
 */
