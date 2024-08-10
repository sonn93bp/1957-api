const app = require("express").Router();
const controller = require("../../controllers/policy.controller");
app.route("/").get(controller.getAll);
app.route("/:slug").get(controller.getBySlug);
module.exports = app;
