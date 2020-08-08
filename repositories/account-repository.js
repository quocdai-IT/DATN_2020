const BaseRepositorty = require("./base-repository");
const dbContext = require("../models");

class accountRepository extends BaseRepositorty {
  constructor() {
    super(dbContext.account);
  }

  findUserDetails(condition) {
    const data = this._entity.findOne({
      where: condition,
      attributes: ["id", "name", "emailAddress", "passWord"],
      include: [
        {
          model: dbContext.role,
          as: "role",
          attributes: ["id", "name"],
        },
      ],
    });
    return data;
  }
}

module.exports = accountRepository;
