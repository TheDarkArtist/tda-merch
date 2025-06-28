import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Health check route
app.get("/", (_req, res) => {
  res.send("TDA-MERCH backend running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
