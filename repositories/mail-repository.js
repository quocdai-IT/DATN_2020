const BaseRepositorty = require("./base-repository");
const dbContext = require("../models");

class mailRepository extends BaseRepositorty {
  constructor() {
    super(dbContext.mail);
  }
}

module.exports = mailRepository;
