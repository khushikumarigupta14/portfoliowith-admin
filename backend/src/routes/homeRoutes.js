// routes/homeRoutes.js
import express from "express";
import { getHome, updateHome } from "../controllers/homeController.js";

const homeRoutes = express.Router();

homeRoutes.get("/", getHome);
homeRoutes.put("/", updateHome);

export default homeRoutes;
