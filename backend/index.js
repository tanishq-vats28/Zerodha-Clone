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

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true if using HTTPS
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

// Body parser middleware
app.use(bodyParser.json());

// Permissive CORS configuration
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow all HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);

// Handle preflight requests for all routes
app.options("*", cors());

// Database connection
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

// Routes
app.use("/user", userRouter);
app.use("/funds", fundsRouter);
app.use("/fetch", fetchRouter);
app.use("/order", orderRouter);
