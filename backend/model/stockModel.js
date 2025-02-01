const mongoose = require("mongoose");
const stockSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  percent: {
    type: Number,
  },
  isDown: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Stock", stockSchema);
