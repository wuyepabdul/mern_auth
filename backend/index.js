import express from "express";
import { connectDb } from "./db/connectDb.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// import path from "path";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
// const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.send(`Welcome to MERN Advanced Auth API at :  ${process.env.CLIENT_URL}`);
});

const corsConfig = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.options(/^\/.*/, cors(corsConfig));
app.use(cors(corsConfig));

app.use((req, res, next) => {
  console.log("Origin:", req.headers.origin);
  next();
});

app.use(cookieParser()); // allows us to parse incoming cookies
app.use(express.json()); // allows us to parse incoming requests from req.body

app.use("/api/auth", authRoutes);

/* if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("/*splat", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} */

connectDb();

// ✅ Only listen locally, export for Vercel
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

export default app;

