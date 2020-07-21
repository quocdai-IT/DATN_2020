const {check} = require('express-validator');
const { checkValidator } = require('./validator-util');

const validator = [
    [
      check('mssv')
        .trim()
        .not()
        .isEmpty(),
        check('email')
        .not()
        .isEmpty()  
    ],
    checkValidator
  ];
  
  module.exports = {
    validator,
    checkValidator
  };