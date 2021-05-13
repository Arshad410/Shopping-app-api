const router = require("express").Router();
const address = require("../controllers/address.controller");

router.post("/", address.add);
router.put("/:id", address.update);
router.delete("/:id", address.remove);

module.exports = router;