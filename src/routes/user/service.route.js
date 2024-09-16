const app = require("express").Router();
const controller = require("../../controllers/service.controller");
app.route("/").get(controller.getAll);
app.route("/slug-mapping").get(controller.getMappingSlug)
app.route("/:slug").get(controller.getBySlug);
module.exports = app;
