const app = require("express").Router();
const controller = require("../../controllers/product.controller");
app.route("/").post(controller.create).get(controller.getAll);
app
  .route("/:productId")
  .put(controller.update)
  .get(controller.getOne)
  .delete(controller.deleteById);
module.exports = app;
