const BaseRepositorty = require("./base-repository");
const dbContext = require("../models");

class xemthiRepository extends BaseRepositorty {
  constructor() {
    super(dbContext.xemthi);
  }
}

module.exports = xemthiRepository;
