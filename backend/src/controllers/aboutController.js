import About from "../models/AboutModel.js";

const getAbout = async (req, res) => {
  const about = await About.findOne();
  res.json(about);
};

const updateAbout = async (req, res) => {
  if (!req.user.isAdmin)
    return res.status(403).json({ message: "Access Denied" });

  const about = await About.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(about);
};
export { getAbout, updateAbout };
