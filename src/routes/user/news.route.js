const app = require("express").Router();
const controller = require("../../controllers/news.controller");
app.route("/:newsId").get(controller.get);
module.exports = app;
