const express = require("express");
const router = express.Router();

router.get("/xemthi", require("./list"));
router.post("/xemthi", require("./create"));
router.get("/xemthi/public", require("./public"));
router.get("/xemthi/accept", require('./accept'));

module.exports = router;
