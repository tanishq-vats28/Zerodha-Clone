const Stock = require("../model/stockModel");
const Order = require("../model/orderModel");

module.exports.Stocks = async (req, res) => {
  try {
    const data = await Stock.find({});
    const percent = Array.from(
      { length: data.length },
      () => Math.floor(Math.random() * 19) - 9
    );

    for (let i = 0; i < data.length; i++) {
      data[i].price = +(
        data[i].price +
        (data[i].price * percent[i]) / 100
      ).toFixed(2);
      data[i].percent = percent[i];
      data[i].isDown = percent[i] < 0;
      await data[i].save();
    }
    res.send({ data });
  } catch (err) {
    res.status(500).send({ error: "Failed to update stocks" });
  }
};

module.exports.Orders = async (req, res) => {
  try {
    const data = await Order.find({ author: req.user.id });
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "No orders found." });
    }
    const reversedData = data.reverse();
    res.status(200).json({ orders: reversedData });
  } catch (err) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching orders." });
  }
};

module.exports.GetHoldings = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ author: userId });

    if (!orders.length) {
      return res
        .status(404)
        .json({ message: "No orders found for this user." });
    }

    const holdings = {};
    orders.forEach((order) => {
      const { name, quantity, price, mode } = order;

      if (!holdings[name]) {
        holdings[name] = {
          name,
          totalQuantity: 0,
          totalInvestment: 0,
          realizedProfit: 0,
        };
      }

      if (mode === "Buy") {
        holdings[name].totalQuantity += quantity;
        holdings[name].totalInvestment += quantity * price;
      } else if (mode === "Sell") {
        const currentQuantity = holdings[name].totalQuantity;
        const currentInvestment = holdings[name].totalInvestment;
        const averageCost = currentInvestment / currentQuantity;

        holdings[name].realizedProfit += quantity * (price - averageCost);
        holdings[name].totalQuantity -= quantity;
        holdings[name].totalInvestment -= quantity * averageCost;
      }
    });

    const stockPrices = await Stock.find({
      name: { $in: Object.keys(holdings) },
    });

    const result = stockPrices
      .map((stock) => {
        const { name, price: ltp } = stock;
        const holding = holdings[name];
        const { totalQuantity, totalInvestment, realizedProfit } = holding;

        const ourValue = totalQuantity * ltp;
        const unrealizedProfit = ourValue - totalInvestment;
        const totalProfit = realizedProfit + unrealizedProfit;

        return {
          name,
          quantity: totalQuantity,
          ltp,
          ourValue,
          pAndL: totalProfit.toFixed(2),
          netChange: realizedProfit.toFixed(2),
          totalInvestment: totalInvestment.toFixed(2),
          avgCost: (totalInvestment / totalQuantity).toFixed(2),
        };
      })
      .filter((holding) => holding.quantity > 0);

    if (!result.length) {
      return res.status(404).json({ message: "No valid holdings found." });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
