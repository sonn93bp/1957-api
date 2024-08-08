const userService = require("./../services/user.service");
const aboutService = require("./../services/about.service");
const contactService = require("./../services/contact.service");
const logger = require("../../lib/config/logger.config");
const initAbout = () => {
  aboutService
    .get()
    .then((about) => {
      if (!about) {
        aboutService.create({
          content: "",
        });
      }
    })
    .catch((err) => {
      logger.error(err);
    });
};

const initContact = () => {
  contactService
    .get()
    .then((contact) => {
      if (!contact) {
        contactService.create({});
      }
    })
    .catch((err) => {
      logger.error(err);
    });
};

const initAdminUser = () => {
  userService
    .findByEmail("admin@info.com")
    .then((user) => {
      logger.info(`email admin: ${user.email}`);
    })
    .catch((_) => {
      userService.create({
        email: "admin@info.com",
        password: "123456",
      });
    });
};

exports.InitDbDefault = async () => {
  initAbout();
  initContact();
  initAdminUser();
};
