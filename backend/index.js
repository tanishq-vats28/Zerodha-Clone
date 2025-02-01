const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/user");
const fundsRouter = require("./routes/funds");
const fetchRouter = require("./routes/fetch");
const orderRouter = require("./routes/order");
const session = require("express-session");
const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3001"],
    credentials: true,
  })
);

require("dotenv").config();
const dbURI = process.env.MONGO_URL;
const PORT = process.env.PORT || 3002;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to db");
    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

app.use("/user", userRouter);
app.use("/funds", fundsRouter);
app.use("/fetch", fetchRouter);
app.use("/order", orderRouter);
