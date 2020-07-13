const LichthiRepository = require("../../repositories/lichThi-repository");

module.exports = async (req, res) => {
  try {
    const lichThiRepository = new LichthiRepository();
    const mssv = req.params.mssv;
    const lichThiByMSSV = await lichThiRepository.findBy({ mssv: mssv });
    if (lichThiByMSSV) {
      return res.success(lichThiByMSSV);
    }
    return res.notFound();
  } catch (error) {
    return res.serverError(error);
  }
};
