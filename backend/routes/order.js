const router = require("express").Router();
const { Buy, Sell } = require("../controllers/orderControllers");
const { isAuthenticated } = require("../middleware/authentication");
router.post("/buy", isAuthenticated, Buy);
router.post("/sell", isAuthenticated, Sell);

module.exports = router;
