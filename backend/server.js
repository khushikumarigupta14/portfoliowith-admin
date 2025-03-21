// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import homeRoutes from "./src/routes/homeRoutes.js";
import connectDB from "./src/config/db.js";
import config from "./src/config/config.js";

dotenv.config();
const app = express();
// const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/home", homeRoutes);

// Connect to MongoDB
connectDB();
app.listen(config.PORT, () =>
  console.log(`Server running on port ${config.PORT}`)
);
