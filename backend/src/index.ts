import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

// Test route
app.get("/", (_req, res) => {
  res.send("[*] TDA-MERCH Backend API is running");
});

// Routes
app.use("/api/auth", authRoutes)

// Start server
const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`[*] Server running on http://localhost:${PORT}`);
  });
};

start();
