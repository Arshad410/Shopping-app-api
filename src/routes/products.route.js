const router = require("express").Router();
const products = require("../controllers/products.controller");

router.post("/", products.add);
router.get("/", products.getAll);
router.get("/:id", products.getById);
router.delete("/:id", products.remove);
router.put("/:id", products.update);
router.post("/bulk", products.bulkInsert);

module.exports = router;