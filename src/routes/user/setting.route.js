const app = require("express").Router();
const controller = require("../../controllers/setting.controller");
app.route("/").get(controller.get);
module.exports = app;
