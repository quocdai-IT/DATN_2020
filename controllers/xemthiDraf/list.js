const XemthiDrafRepository = require("../../repositories/xemthi-draf-repository");

module.exports = async (req, res) => {
  try {
    const xemThidrafRepository = new XemthiDrafRepository();

    const lichXemThi = await xemThidrafRepository.findAll();

    return res.success(lichXemThi);
  } catch (error) {
    return res.serverError(error);
  }
};
