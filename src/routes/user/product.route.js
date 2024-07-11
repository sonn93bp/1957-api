const app = require("express").Router();
const controller = require("../../controllers/product.controller");
app.route("/").get(controller.getAll);
app.route("/:productId").get(controller.getOne);
module.exports = app;
