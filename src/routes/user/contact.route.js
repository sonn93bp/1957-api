const app = require("express").Router();
const controller = require("../../controllers/contact.controller");
app.route("/").get(controller.get);
module.exports = app;
