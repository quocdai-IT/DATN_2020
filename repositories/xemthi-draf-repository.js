const BaseRepositorty = require("./base-repository");
const dbContext = require("../models");

class xemthiDrafRepository extends BaseRepositorty {
  constructor() {
    super(dbContext.xemthi_draf);
  }
}

module.exports = xemthiDrafRepository;
