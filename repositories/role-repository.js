const BaseRepository = require("./base-repository");
const dbContext = require("../models");

class RoleRepository extends BaseRepository {
  constructor() {
    super(dbContext.role);
  }
}

module.exports = RoleRepository;
