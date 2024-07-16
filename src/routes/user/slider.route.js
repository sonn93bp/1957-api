const app = require("express").Router();
const controller = require("../../controllers/slider.controller");
app.route("/").get(controller.get);
module.exports = app;
