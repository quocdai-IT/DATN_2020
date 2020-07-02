const express = require("express");
const router = express.Router();

router.get("/scrape", require("./crawl-data"));

module.exports = router;
