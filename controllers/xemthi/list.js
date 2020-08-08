const XemthiRepository = require("../../repositories/xemthi-repository");

module.exports = async (req, res) => {
  try {
    const xemThiRepository = new XemthiRepository();

    const lichXemThi = await xemThiRepository.findAll();

    return res.success(lichXemThi);
  } catch (error) {
    return res.serverError(error);
  }
};
