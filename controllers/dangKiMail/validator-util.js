const { validationResult } = require('express-validator');

function checkValidator(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.invalidInput(errors.mapped());
  }
  next();
}

module.exports = { checkValidator };