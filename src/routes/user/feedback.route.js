const app = require("express").Router();
const controller = require("../../controllers/feedback.controller");
app.route("/").get(controller.get);
module.exports = app;
