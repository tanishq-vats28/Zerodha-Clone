const router = require("express").Router();
const {
  Stocks,
  Orders,
  GetHoldings,
} = require("../controllers/fetchControllers");
const { isAuthenticated } = require("../middleware/authentication");
router.get("/stocks", Stocks);
router.post("/orders", isAuthenticated, Orders);
router.post("/holdings", isAuthenticated, GetHoldings);

module.exports = router;
