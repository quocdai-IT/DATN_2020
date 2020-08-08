const express = require("express");
const router = express.Router();

router.post("/", require("./create"));
router.get("/", require("./list"));

module.exports = router;
