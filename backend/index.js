const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");
const fundsRouter = require("./routes/funds");
const fetchRouter = require("./routes/fetch");
const orderRouter = require("./routes/order");

require("dotenv").config();

const app = express();
const dbURI = process.env.MONGO_URL;
const PORT = process.env.PORT || 3002;

// Session middleware configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || "defaultSecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true only if using HTTPS
      httpOnly: true,
      sameSite: "lax", // Recommended to avoid CSRF
    },
  })
);

// Middleware setup
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3001"], // Add other frontend origins if needed
    credentials: true,
  })
);

// Enable CORS preflight for all routes
app.options("*", cors());

// Database connection and server start
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

// API routes
app.use("/user", userRouter);
app.use("/funds", fundsRouter);
app.use("/fetch", fetchRouter);
app.use("/order", orderRouter);
