const app = require("express").Router();
const controller = require("../../controllers/about.controller");
app.route("/").post(controller.create).get(controller.get);
module.exports = app;
