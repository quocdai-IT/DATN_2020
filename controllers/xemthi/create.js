const XemthiRepository = require("../../repositories/xemthi-repository");

module.exports = async (req, res) => {
  try {
    const xemThiRepository = new XemthiRepository();
    const data = req.body;

    await xemThiRepository.add(data);

    return res.success(data);
  } catch (error) {
    return res.serverError(error);
  }
};
