import express from "express";
import { connectDb } from "./db/connectDb.js";
import dotenv from "dotenv";
import authRoutes from "../backend/routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// import path from "path";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
// const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.send("Welcome to MERN Advanced Auth API");
});

const corsConfig = {
  origin: process.env.CLIENT_URL_PRODUCTION,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsConfig));

app.options(/.*/, cors(corsConfig));
// app.options(/.*/, cors(corsConfig));

app.use(express.json()); // allows us to parse incoming requests from req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);

/* if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} */

/* if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    connectDb();
    console.log(`Server running on port ${port}`);
  });
} */
app.listen(port, () => {
  connectDb();
  console.log(`Server running on port ${port}`);
});
// export default app;
