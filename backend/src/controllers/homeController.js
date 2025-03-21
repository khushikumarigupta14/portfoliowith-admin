// controllers/homeController.js
import Home from "../models/Home.js";

// Get Home Page Data
export const getHome = async (req, res) => {
  try {
    const home = await Home.findOne();
    if (!home) return res.status(404).json({ message: "No data found" });
    res.json(home);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Home Page Data
export const updateHome = async (req, res) => {
  try {
    const { title, description } = req.body;
    let home = await Home.findOne();
    if (!home) {
      home = new Home({ title, description });
    } else {
      home.title = title;
      home.description = description;
    }
    await home.save();
    res.json(home);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
