const { Login, Logout } = require("../controllers/authControllers.js");
const { isAuthenticated } = require("../middleware/authentication.js");

const jwt = require("jsonwebtoken");
const router = require("express").Router();

router.post("/logout", Logout);

router.post("/login", Login);

router.get("/protected", isAuthenticated, (req, res) => {
  res.json({ message: "Protected data" });
});
module.exports = router;
