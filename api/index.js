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
};

const allowedOrigins = [process.env.CLIENT_URL];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log("Origin:", req.headers.origin);
  next();
});

app.use(express.json()); // allows us to parse incoming requests from req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);

connectDb();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
