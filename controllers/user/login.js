const AcountRepository = require("../../repositories/account-repository");
const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  const body = req.body;
  const accountRepository = new AcountRepository();
  try {
    const data = {
      emailAddress: body.emailAddress,
      passWord: body.passWord,
    };
    const user = await accountRepository.findUserDetails({
      emailAddress: data.emailAddress,
    });

    // console.log(user);
    if (!user) {
      return res.notFound("User not found");
    }
    if (data.passWord !== user.dataValues.passWord) {
      return res.invalidInput("Incorrect password");
    }
    const token = jwt.sign(
      {
        id: user.dataValues.id,
        name: user.dataValues.name,
        emailAddress: user.dataValues.emailAddress,
        roles: user.dataValues.role,
      },
      "Palomino1!",
      {
        expiresIn: 604800,
      }
    );

    res.json({
      success: true,
      token: token,
      user: {
        id: user.dataValues.id,
        name: user.dataValues.name,
        emailAddress: user.dataValues.emailAddress,
      },
    });
  } catch (error) {
    console.log(error);
    return res.serverError(error);
  }
};
