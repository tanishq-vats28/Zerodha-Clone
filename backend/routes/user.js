const {
  Login,
  getToken,
  Logout,
} = require("../controllers/authControllers.js");

const router = require("express").Router();

const jwt = require("jsonwebtoken");

router.post("/logout", Logout);

router.get("/token", getToken);

router.post("/login", Login);

module.exports = router;
