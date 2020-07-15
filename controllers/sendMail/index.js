const express = require("express");
const router = express.Router();

router.post("/", require("./sendMail"));

module.exports = router;
