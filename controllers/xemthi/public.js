const XemthiRepository = require("../../repositories/xemthi-repository");
const XemthiDrafRepository = require("../../repositories/xemthi-draf-repository");

module.exports = async (req, res) => {
  try {
    const xemThiRepository = new XemthiRepository();
    const xemThiDrafRepository = new XemthiDrafRepository();

    const lichXemThi = await xemThiRepository.findBy({});
    let promises = [];
    if (lichXemThi.length > 0) {
      lichXemThi.forEach((item) => {
        promises.push(xemThiDrafRepository.add(item));
      });
      await Promise.all(promises);
    }
    return res.success(lichXemThi);
  } catch (error) {
    return res.serverError(error);
  }
};
