const express = require("express");
const router = express.Router();

router.post("/upload", require("./uploadFile"));

module.exports = router;
