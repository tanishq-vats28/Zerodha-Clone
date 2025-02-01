const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const dbURI = process.env.MONGO_URL;
const PORT = process.env.PORT || 3002;

// Trust proxy for HTTPS headers
app.set("trust proxy", 1);

// Production CORS Configuration
const allowedOrigins = [
  "https://extraordinary-stroopwafel-ebc42d.netlify.app",
  "https://neon-concha-0e83fb.netlify.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (mobile apps, curl, etc)
      if (!origin) return callback(null, true);

      // Match main domain and all subpaths
      const allowed = allowedOrigins.some(
        (allowedOrigin) =>
          origin.startsWith(allowedOrigin.replace(/\/$/, "")) || // Remove trailing slash
          origin === allowedOrigin
      );

      allowed ? callback(null, true) : callback(new Error("Blocked by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Production Session Configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: dbURI,
      collectionName: "sessions",
      ttl: 14 * 24 * 60 * 60, // 14 days
    }),
    cookie: {
      secure: true, // Required for HTTPS
      httpOnly: true,
      sameSite: "none", // Cross-site cookies
      domain: ".onrender.com", // Allow all subdomains
      maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days
    },
  })
);

// Body Parser
app.use(bodyParser.json());

// Preflight handling
app.options("*", cors());

// Database Connection
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`Production server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/user", require("./routes/user"));
app.use("/funds", require("./routes/funds"));
app.use("/fetch", require("./routes/fetch"));
app.use("/order", require("./routes/order"));
