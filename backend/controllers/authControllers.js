// controllers/authControllers.js
const User = require("../model/userModel");
const { createSecretToken } = require("../util/secretTocken.js");
const bcrypt = require("bcrypt");

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
    res.status(200).json({
      success: true,
      message: "Authentication successful",
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.Logout = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Logged out successfully. Please clear your token client-side.",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
