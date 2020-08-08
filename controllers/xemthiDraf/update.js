const XemthiDrafRepository = require("../../repositories/xemthi-draf-repository");

module.exports = async (req, res) => {
  try {
    const xemThiDrafRepository = new XemthiDrafRepository();
    const data = req.body;
    console.log(data);
    await xemThiDrafRepository.updateByOne(data, { id: data.id });

    return res.success(data);
  } catch (error) {
    console.log(error);
    return res.serverError(error);
  }
};
