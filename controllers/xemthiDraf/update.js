const XemthiDrafRepository = require("../../repositories/xemthi-draf-repository");

module.exports = async (req, res) => {
  try {
    const xemThiDrafRepository = new XemthiDrafRepository();
    const data = req.body;
    await xemThiDrafRepository.updateByOne(data, { thoigian: data.thoigian });

    return res.success(data);
  } catch (error) {
    return res.serverError(error);
  }
};
