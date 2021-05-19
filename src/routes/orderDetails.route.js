const router = require("express").Router();
const orderDetails = require("../controllers/orderDetails.controller");

router.post("/", orderDetails.add);
router.get("/", orderDetails.getAll);
router.put("/:id", orderDetails.update);
router.delete("/:id", orderDetails.remove);

module.exports = router; 