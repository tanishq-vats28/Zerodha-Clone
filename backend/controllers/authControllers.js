const User = require("../model/userModel");
const { createSecretToken } = require("../util/secretTocken.js");
const bcrypt = require("bcrypt");

const session = require("express-session");

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let user = await User.findOne({ email });

    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (!auth) {
        return res.status(401).json({ message: "Incorrect password or email" });
      }
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);
      user = await User.create({
        email,
        password: hashedPassword,
        createdAt: new Date(),
      });

      if (!user) {
        return res.status(500).json({ message: "Failed to create user" });
      }
    }

    const token = createSecretToken(user._id);
    req.session.token = token;

    // Explicitly save the session
    req.session.save((err) => {
      if (err) {
        console.error("Session save error:", err);
        return res.status(500).json({ message: "Session error" });
      }

      res.status(200).json({
        success: true,
        message: "Authentication successful",
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.getToken = async (req, res) => {
  const token = req.session.token;

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  res.status(200).json({ token });
};

module.exports.Logout = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Failed to log out" });
      }
      res.clearCookie("connect.sid");
      return res.status(200).json({ message: "Logged out successfully" });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
