const {
  Add,
  Fetch,
  Withdraw,
} = require("../controllers/balanceControllers.js");
const router = require("express").Router();
const { isAuthenticated } = require("../middleware/authentication.js");

router.post("/add", isAuthenticated, Add);
router.post("/fetch", isAuthenticated, Fetch);
router.post("/withdraw", isAuthenticated, Withdraw);

module.exports = router;
