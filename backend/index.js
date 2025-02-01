const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");
const fundsRouter = require("./routes/funds");
const fetchRouter = require("./routes/fetch");
const orderRouter = require("./routes/order");
const MongoStore = require("connect-mongo");

require("dotenv").config();

const app = express();
const dbURI = process.env.MONGO_URL;
const PORT = process.env.PORT || 3002;

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

app.use(bodyParser.json());

// CORS configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true, // Required for HTTPS
      httpOnly: true,
      sameSite: "none", // Allow cross-origin cookies
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
    store: MongoStore.create({
      // Add session store
      mongoUrl: process.env.MONGO_URL,
      collectionName: "sessions",
    }),
  })
);

app.options("*", cors());

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

app.use("/user", userRouter);
app.use("/funds", fundsRouter);
app.use("/fetch", fetchRouter);
app.use("/order", orderRouter);
