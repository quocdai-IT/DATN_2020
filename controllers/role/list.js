const RoleRepo = require("../../repositories/role-repository");
module.exports = async (req, res, next) => {
  try {
    const roleRepository = new RoleRepo();
    const listRole = await roleRepository.findAll();
    return res.success(listRole);
  } catch (error) {
    return res.serverError(error);
  }
};
