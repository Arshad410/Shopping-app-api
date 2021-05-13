const router = require("express").Router();
const products = require("../controllers/products.controller");

router.post("/add", products.add);
router.post("/bulk", products.bulkInsert);
router.get("/", products.getAll);
router.get("/:id", products.getById);
router.delete("/:id", products.remove);
router.put("/:id", products.update);

module.exports = router; 