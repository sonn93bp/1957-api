const app = require("express").Router();
const controller = require("../../controllers/request.controller");
app.route("/").post(controller.create);
module.exports = app;
