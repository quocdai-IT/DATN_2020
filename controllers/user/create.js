module.exports = async (req, res, next) => {
  const body = req.body;
  const AccountRepository = require("../../repositories/account-repository");
  const accountRepository = new AccountRepository();
  try {
    const data = {
      name: body.name,
      emailAddress: body.emailAddress,
      passWord: body.passWord,
    };
    const checkExist = await accountRepository.findOne({
      emailAddress: data.emailAddress,
    });
    if (checkExist) {
      return res.conflict("User is already exist");
    }
    const newUser = await accountRepository.add(data);
    if (body.role) {
      await newUser.setRole(body.role);
    }
    return res.success(newUser);
  } catch (error) {
    console.log(error);
    return res.serverError(error);
  }
};
