const router = require("express").Router();
const payment = require("../controllers/payment.controller");

router.post("/check", payment.checkStatus);

module.exports = router;