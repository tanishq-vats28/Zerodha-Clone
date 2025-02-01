const mongoose = require("mongoose");
const User = require("../model/userModel");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  mode: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
orderSchema.pre("save", function (next) {
  if (this.price) {
    this.price = parseFloat(this.price.toFixed(2));
  }
  next();
});

module.exports = mongoose.model("Order", orderSchema);
