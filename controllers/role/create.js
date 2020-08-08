const RoleRepo = require("../../repositories/role-repository");
module.exports = async (req, res, next) => {
  const body = req.body;
  const data = { name: body.name, description: body.description };
  try {
    const roleRepository = new RoleRepo();
    const newRole = await roleRepository.add(data);
    return res.success(newRole);
  } catch (error) {
    return res.serverError(error);
  }
};
