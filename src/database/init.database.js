const userService = require("./../services/user.service");

exports.InitDbDefault = async () => {
  try {
    await userService.findByEmail("admin@info.com");
  } catch (error) {
    await userService.create({
      email: "admin@info.com",
      password: "123456",
    });
  }
};
