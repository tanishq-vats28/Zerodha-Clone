const Stock = require("../model/stockModel");
const Order = require("../model/orderModel");
const mongoose = require("mongoose");

const URL =
  "mongodb+srv://tanishqvats2804:A1a5YAEK3gV4NMuE@zerodhaclone.2hp2t.mongodb.net/?retryWrites=true&w=majority&appName=ZerodhaClone";
const saveData = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to db");

    const result = await Stock.find({});
    const data2 = await Order.find({});

    console.log(result, data2);
    mongoose.connection.close();
  } catch (err) {
    console.error("Error saving data:", err);
  }
};

saveData();
