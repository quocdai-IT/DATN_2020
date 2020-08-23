const XemthiDrafRepository = require("../../repositories/xemthi-draf-repository");

module.exports = async (req, res) => {
  try {
    const xemThiDrafRepository = new XemthiDrafRepository();
    const data = req.body;
    const promises = [];
    data.forEach((data) => {
      promises.push(xemThiDrafRepository.updateByOne(data, { id: data.id }));
    });
    await Promise.all(promises);
    return res.success(data);
  } catch (error) {
    console.log(error);
    return res.serverError(error);
  }
};
