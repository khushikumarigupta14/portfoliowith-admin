import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const protect = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return res.status(401).json({ message: "Unauthorized: No token" });

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export default protect;
