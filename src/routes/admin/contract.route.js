const app = require("express").Router();
const controller = require("../../controllers/contract.controller");
app.route("/").post(controller.create).get(controller.get);
app.route("/:contractId").put(controller.update);
module.exports = app;
