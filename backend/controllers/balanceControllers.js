const Fund = require("../model/fundsModel");

module.exports.Add = async (req, res) => {
  try {
    let data = await Fund.findOne({ author: req.user.id });

    if (!data) {
      data = await Fund.create({
        author: req.user.id,
      });
    }

    data.totalBalance += req.body.addCash;
    data.collateral += req.body.addCash;

    await data.save();

    res.status(200).json({
      message: "Funds updated successfully",
      data: data,
      success: true,
    });
  } catch (error) {
    success: true,
      res.status(500).json({ message: "Server error", error: error.message });
  }
};
module.exports.Withdraw = async (req, res) => {
  try {
    let data = await Fund.findOne({ author: req.user.id });

    if (!data) {
      return res.status(404).json({
        message: "No fund data found for this user",
        success: false,
      });
    }
    if (data.totalBalance < req.body.withdrawCash) {
      return res.status(422).json({
        message: "Insufficient balance",
        success: false,
      });
    }

    data.totalBalance -= req.body.withdrawCash;
    data.collateral -= req.body.withdrawCash;

    await data.save();

    res.status(200).json({
      message: "Withdrawal successful",
      data: data,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports.Fetch = async (req, res) => {
  try {
    let data = await Fund.findOne({ author: req.user.id });
    if (!data) {
      data = await Fund.create({
        author: req.user.id,
      });
    }
    await data.save();
    res.status(200).json({
      message: "Funds Fetched successfully",
      data: data,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
