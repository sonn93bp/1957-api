const app = require("express").Router();
const controller = require("../../controllers/slider.controller");
app.route("/").post(controller.create).get(controller.get);
module.exports = app;
