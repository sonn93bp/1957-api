const app = require("express").Router();
const controller = require("../../controllers/setting.controller");
app.route("/").get(controller.get);
app.route("/:id").put(controller.update);
module.exports = app;
