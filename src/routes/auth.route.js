const app = require("express").Router();
const passport = require("passport");
const { validate } = require("express-validation");
const { logIn, refreshToken } = require("../validations/auth.validation");
const controller = require("../controllers/auth.controller");

app.route("/login").post(controller.logIn);

app
  .route("/logout")
  .get(passport.authenticate("jwt", { session: false }), controller.logOut);

app
  .route("/refresh-token")
  .post(validate(refreshToken), controller.refeshToken);

module.exports = app;
