const express = require("express");
// eslint-disable-next-line new-cap
const router = express.Router();

router.get("/:mssv", require("./getByMSSV"));

module.exports = router;
