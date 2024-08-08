const app = require("express").Router();
const controller = require("../../controllers/news.controller");
app.route("/").post(controller.create);
app.route("/:id").put(controller.update).get(controller.get);
module.exports = app;
