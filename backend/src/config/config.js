import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const config = {
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/yourDatabase",
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET || "your_secret_key",
  NODE_ENV: process.env.NODE_ENV || "development",
};

export default config;
