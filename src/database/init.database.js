const userService = require("./../services/user.service");
const aboutService = require("./../services/about.service");
const settingService = require("./../services/setting.service");
const contactService = require("./../services/contact.service");
const benefitsService = require("./../services/benefits.service");
const logger = require("../../lib/config/logger.config");

const initAbout = () => {
  aboutService
    .get()
    .then((about) => {
      if (!about) {
        aboutService.create({
          content: "",
          title: "Title About",
          slug: "about",
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

const initBenefits = () => {
  benefitsService
    .get()
    .then((contact) => {
      if (!contact) {
        benefitsService.create({});
      }
    })
    .catch((err) => {
      logger.error(err);
    });
};

const initSetting = () => {
  settingService
    .get()
    .then((setting) => {
      if (!setting) {
        settingService.create({
          website: "",
        });
      }
    })
    .catch((err) => {
      logger.error(err);
    });
};

exports.InitDbDefault = async () => {
  initAbout();
  initContact();
  initAdminUser();
  initBenefits();
  initSetting();
};
