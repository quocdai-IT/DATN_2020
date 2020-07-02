const BaseRepositorty = require("./base-repository");
const dbContext = require("../models");

class LichthiRepository extends BaseRepositorty {
  constructor() {
    super(dbContext.lichthi);
  }
}

module.exports = LichthiRepository;
