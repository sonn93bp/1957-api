const app = require("express").Router();
const controller = require("../../controllers/about.controller");
app.route("/").get(controller.get);
module.exports = app;
