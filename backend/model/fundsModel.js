const mongoose = require("mongoose");
const User = require("../model/userModel");

const fundSchema = new mongoose.Schema({
  totalBalance: {
    type: Number,
    default: 0,
  },
  collateral: {
    type: Number,
    default: 0,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
fundSchema.pre("save", function (next) {
  if (this.totalBalance) {
    this.totalBalance = parseFloat(this.totalBalance.toFixed(2));
  }
  next();
});
module.exports = mongoose.model("Fund", fundSchema);
