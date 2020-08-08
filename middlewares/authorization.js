const jwt = require("jsonwebtoken");
// const config = require('config');
const ACL = require("./acl");
const _ = require("lodash");

module.exports = function (req, res, next) {
  try {
    //get the token from the header if present
    const method = req.method.toLowerCase();
    const path = req.path.toLowerCase();
    const acl =
      ACL.find(
        (item) => item.method === method && path.startsWith(item.path)
      ) || {};

    const userRules = (req.user && req.user.roles) || [];
    const userRulesNames = userRules.map((item) => {
      return { name: item.name };
    });

    let allowed = false;
    if (acl) {
      const rulesFilter = _.filter(userRulesNames, (userRulesName) => {
        const checkExisted = _.find(acl.rules, (requiredRule) => {
          return userRulesName.name === requiredRule.toString();
        });
        return checkExisted ? true : false;
      });
      if (rulesFilter.length > 0) {
        allowed = true;
      }
    } else {
      return res.send(
        `Missing define ACL for this api [method=${method}, path=${path}]`
      );
    }
    if (allowed) {
      next();
    } else {
      return res.forbidden();
    }
  } catch (error) {
    console.log(error);
  }
};
