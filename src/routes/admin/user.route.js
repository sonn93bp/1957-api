const app = require("express").Router();
const controller = require("../../controllers/user.controller");
app.route("/").post(controller.create).get(controller.findByEmail);

module.exports = app;
