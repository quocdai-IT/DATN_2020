const jwt = require("jsonwebtoken");
// const config = require('config');

module.exports = function (req, res, next) {
  //get the token from the header if present
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  //if no token found, return response (without going to the next middelware)
  if (!token) {
    return res.status(401).send({
      success: false,
      message: "Server Error",
      data: "Login required",
    });
  }

  const payload = jwt.decode(token);
  if (!payload) {
    return res.status(401).send({
      success: false,
      message: "Server Error",
      data: "Invalid account.",
    });
  }
  req.user = payload;
  next();
};
