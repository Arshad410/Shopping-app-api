const router = require("express").Router();
const orders = require("../controllers/order.controller");

router.get("/", orders.getAll)
router.post("/", orders.add);
router.put("/:id", orders.update);
router.delete("/:id", orders.remove);

module.exports = router;


