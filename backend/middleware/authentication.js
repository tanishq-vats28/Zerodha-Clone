// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

module.exports.isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log("Middleware token", token);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    console.log("Middle ware user:", req.user);
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
