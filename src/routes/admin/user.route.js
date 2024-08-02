const app = require("express").Router();
const controller = require("../../controllers/user.controller");
app.route("/").post(controller.create);
app.route("/info").get(controller.getInfo);
module.exports = app;
