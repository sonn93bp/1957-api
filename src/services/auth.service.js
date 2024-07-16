const userService = require("./user.service");
const {
  generateJwtRefreshToken,
  generateJwtToken,
} = require("./../../lib/utils/jwt.utils");

const { compare } = require("./../../lib/utils/bcrypt.utils");
const BadRequestError = require("../../lib/errors/badrequest.error");

const logIn = async (email, password) => {
  var user = await userService.findByEmail(email);
  console.log(password);
  console.log(user.password);
  const verify = await compare(password, user.password);
  console.log(verify);
  if (verify) {
    return {
      email: email,
      token: generateJwtToken(user),
      refesh_token: generateJwtRefreshToken(user),
    };
  }
  throw new BadRequestError("Password invalid");
};

const refeshToken = (token) => {
  var user = userService.findByEmail(email);
};

const logOut = (token) => {
  var user = userService.findByEmail(email);
};

module.exports = {
  logIn,
  refeshToken,
  logOut,
};
