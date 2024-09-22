const app = require("express").Router();
const controller = require("../../controllers/news.controller");
app.route("/").get(controller.getAll);
app.route("/:slug").get(controller.getBySlug);
module.exports = app;
