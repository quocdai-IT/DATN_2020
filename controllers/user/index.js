const express = require("express");
const router = express.Router();

router.post("/", require("./create"));
router.post("/login", require("./login"));

module.exports = router;
