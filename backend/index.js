require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const MongoStore = require("connect-mongo");
const userRouter = require("./routes/user");
const fundsRouter = require("./routes/funds");
const fetchRouter = require("./routes/fetch");
const orderRouter = require("./routes/order");

const app = express();
const PORT = process.env.PORT || 3002;

// Database Connection
const dbURI = process.env.MONGO_URL;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("Database connection error:", error));

// Middleware Configurations
app.use(bodyParser.json());

// Session Configuration with MongoDB Store
app.use(
  session({
    secret: process.env.SESSION_SECRET || "defaultSecret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: dbURI,
      ttl: 24 * 60 * 60, // Sessions last for 1 day
    }),
    cookie: {
      secure: process.env.NODE_ENV === "production", // True for production (requires HTTPS)
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
    },
  })
);

// CORS Configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3001",
      "https://your-deployed-frontend-url.com",
    ],
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
      "Origin",
      "Access-Control-Allow-Credentials",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.options("*", cors());

// Debug Middleware for Session Tracking
app.use((req, res, next) => {
  console.log("Session Data:", req.session);
  next();
});

// Routes
app.use("/user", userRouter);
app.use("/funds", fundsRouter);
app.use("/fetch", fetchRouter);
app.use("/order", orderRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

module.exports = app;
