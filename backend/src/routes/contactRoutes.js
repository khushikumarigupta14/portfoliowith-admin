import express from "express";
import {
  getMessages,
  submitMessage,
  deleteMessage,
} from "../controllers/contactController.js";
import protect from "../middleware/authMiddleware.js";

const contactRoutes = express.Router();

contactRoutes.get("/", protect, getMessages); // Admin only
contactRoutes.post("/", submitMessage); // Public
contactRoutes.delete("/:id", protect, deleteMessage); // Admin only

export default contactRoutes;
