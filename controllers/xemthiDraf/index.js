const express = require("express");
const router = express.Router();

router.get("/Draf", require("./list"));
router.post("/Draf", require("./update"));

module.exports = router;
