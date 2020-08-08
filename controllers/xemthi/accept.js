const XemthiRepository = require("../../repositories/xemthi-repository");
const XemthiDrafRepository = require("../../repositories/xemthi-draf-repository");

module.exports = async (req, res) => {
  try {
    const xemThiRepository = new XemthiRepository();
    const xemThiDrafRepository = new XemthiDrafRepository();

    const lichXemThiDr = await xemThiDrafRepository.findBy({});
    let promises = [];
    if (lichXemThiDr.length > 0) {
        xemThiRepository.truncate();
        lichXemThiDr.forEach((item) => {
        promises.push(xemThiRepository.add(item));
      });
      await Promise.all(promises);
    }
    return res.success(lichXemThiDr);
  } catch (error) {
    console.log(error);
    return res.serverError(error);
  }
};
