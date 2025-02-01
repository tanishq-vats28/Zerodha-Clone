const Fund = require("../model/fundsModel");
const Order = require("../model/orderModel");

module.exports.Buy = async (req, res) => {
  try {
    const { price, qty, mode } = req.body;
    if (!price || !qty || !mode || price <= 0 || qty <= 0) {
      return res.status(400).json({
        message:
          "Invalid or missing fields: price, qty, and mode are required.",
        success: false,
      });
    }
    let data = await Fund.findOne({ author: req.user.id });

    if (!data) {
      data = await Fund.create({
        author: req.user.id,
      });
    }
    if (qty <= 0) {
      return res.status(422).json({
        message: "Quantity should be greater then zero",
        success: false,
      });
    }
    const orderAmount = price * qty;
    if (data.totalBalance < orderAmount) {
      return res.status(422).json({
        message: "Insufficient balance",
        success: false,
      });
    }
    const newOrder = await Order.create({
      name: req.body.name,
      quantity: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
      author: req.user.id,
    });
    data.totalBalance -= +orderAmount.toFixed(2);
    await data.save();
    res.status(200).json({
      message: "Funds updated successfully",
      success: true,
      order: newOrder,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};
module.exports.Sell = async (req, res) => {
  try {
    const { price, qty, mode, name } = req.body;
    if (
      !price ||
      !qty ||
      !mode ||
      !name ||
      mode !== "Sell" ||
      price <= 0 ||
      qty <= 0
    ) {
      return res.status(400).json({
        message:
          "Invalid or missing fields: stockName, price, qty, and mode (must be 'sell') are required.",
        success: false,
      });
    }
    const userOrders = await Order.find({
      author: req.user.id,
      name: name,
    });

    if (!userOrders || userOrders.length === 0) {
      return res.status(404).json({
        message: `No previous orders found for the stock "${stockName}".`,
        success: false,
      });
    }

    let totalOwnedQty = 0;
    userOrders.forEach((order) => {
      if (order.mode === "Buy") {
        totalOwnedQty += order.quantity;
      } else if (order.mode === "Sell") {
        totalOwnedQty -= order.quantity;
      }
    });
    if (qty > totalOwnedQty) {
      return res.status(422).json({
        message: `Insufficient stock quantity for "${stockName}". You only own ${totalOwnedQty} units.`,
        success: false,
      });
    }

    const saleAmount = price * qty;
    const newOrder = await Order.create({
      name,
      quantity: qty,
      price,
      mode,
      author: req.user.id,
    });

    let data = await Fund.findOne({ author: req.user.id });
    if (!data) {
      data = await Fund.create({ author: req.user.id });
    }
    data.totalBalance += saleAmount;
    await data.save();

    res.status(200).json({
      message: "Sell order placed successfully and funds updated.",
      success: true,
      order: newOrder,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};
