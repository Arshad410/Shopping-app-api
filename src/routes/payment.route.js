const router = require("express").Router();
const payment = require("../controllers/payment.controller");

router.post("/", payment.checkStatus);

module.exports = router;