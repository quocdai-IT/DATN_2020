const express = require("express");
const validator = require('./validator').validator;

// eslint-disable-next-line new-cap
const router = express.Router();

router.post("/",validator, require("./create"));

module.exports = router;
