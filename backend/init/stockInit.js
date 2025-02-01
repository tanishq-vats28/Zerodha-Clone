const Stock = require("../model/stockModel");
const mongoose = require("mongoose");
require("dotenv").config();

const URL =
  "mongodb+srv://tanishqvats2804:A1a5YAEK3gV4NMuE@zerodhaclone.2hp2t.mongodb.net/?retryWrites=true&w=majority&appName=ZerodhaClone";
const stockData = {
  price: [1553.3, 155.2, 3567.5, 123.4, 432.1, 512.5, 845.7, 2456.9, 2599.8],
  percent: [2, -1.5, 0.8, 3.2, -0.6, 2.5, 1.9, 0.4, -2.3],
};

const data = [
  {
    name: "INFY",
    price: stockData.price[0],
    percent: stockData.percent[0],
    isDown: stockData.percent[0] < 0,
  },
  {
    name: "ONGC",
    price: stockData.price[1],
    percent: stockData.percent[1],
    isDown: stockData.percent[1] < 0,
  },
  {
    name: "TCS",
    price: stockData.price[2],
    percent: stockData.percent[2],
    isDown: stockData.percent[2] < 0,
  },
  {
    name: "KPITTECH",
    price: stockData.price[3],
    percent: stockData.percent[3],
    isDown: stockData.percent[3] < 0,
  },
  {
    name: "QUICKHEAL",
    price: stockData.price[4],
    percent: stockData.percent[4],
    isDown: stockData.percent[4] < 0,
  },
  {
    name: "WIPRO",
    price: stockData.price[5],
    percent: stockData.percent[5],
    isDown: stockData.percent[5] < 0,
  },
  {
    name: "M&M",
    price: stockData.price[6],
    percent: stockData.percent[6],
    isDown: stockData.percent[6] < 0,
  },
  {
    name: "RELIANCE",
    price: stockData.price[7],
    percent: stockData.percent[7],
    isDown: stockData.percent[7] < 0,
  },
  {
    name: "HUL",
    price: stockData.price[8],
    percent: stockData.percent[8],
    isDown: stockData.percent[8] < 0,
  },
];

const saveData = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to db");

    const result = await Stock.insertMany(data);
    console.log("Data saved successfully:", result);
    mongoose.connection.close();
  } catch (err) {
    console.error("Error saving data:", err);
  }
};

saveData();
