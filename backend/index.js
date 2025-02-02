const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const dbURI = process.env.MONGO_URL;
const PORT = process.env.PORT || 3002;

app.use(
  cors({
    origin: [
      "https://extraordinary-stroopwafel-ebc42d.netlify.app",
      "https://neon-concha-0e83fb.netlify.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(bodyParser.json());

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

app.use("/user", require("./routes/user"));
app.use("/funds", require("./routes/funds"));
app.use("/fetch", require("./routes/fetch"));
app.use("/order", require("./routes/order"));
