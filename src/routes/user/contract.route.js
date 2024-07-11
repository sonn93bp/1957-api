const app = require("express").Router();
const controller = require("../../controllers/contract.controller");
app.route("/").get(controller.get);
module.exports = app;
