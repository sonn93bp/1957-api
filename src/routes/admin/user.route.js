const app = require("express").Router();
const { validate } = require("express-validation");
const controller = require("../../controllers/user.controller");
const { changePwd } = require("../../validations/user.validation");
app.route("/").post(controller.create);
app.route("/info").get(controller.getInfo);
app.route("/:id").put(validate(changePwd), controller.updatePwd)
module.exports = app;
