const MailRepository = require("../../repositories/mail-repository");

module.exports = async (req, res, next) => {
  try {
    const mailRepository = new MailRepository();
    const { name, mssv, email } = req.body;
    const data = { name, mssv, email };
    const checkExist = await mailRepository.findOne({ mssv });
    if (checkExist) {
      return res.invalidInput("MSSV này đã đăng kí!");
    } else {
      const newData = await mailRepository.add(data);
      return res.success(newData);
    }
  } catch (error) {
    console.log(error);
    return res.serverError(error);
  }
};
