const BaseRepositorty = require("./base-repository");
const dbContext = require("../models");

class mailRepository extends BaseRepositorty {
  constructor() {
    super(dbContext.mail);
  }

  async getLichThiByMail() {
    return this._entity.findAll({
      include: {
        model: lichThi,
      }
    })
  }
}

module.exports = mailRepository;
