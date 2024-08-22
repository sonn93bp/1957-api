const app = require("express").Router();
const controller = require("../../controllers/benefits.controller");
app.route("/").get(controller.get);
module.exports = app;
