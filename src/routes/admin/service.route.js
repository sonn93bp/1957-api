const app = require("express").Router();
const controller = require("../../controllers/service.controller");
app.route("/").post(controller.create).get(controller.getAll);
app
  .route("/:id")
  .put(controller.update)
  .get(controller.getOne)
  .delete(controller.deleteById);
module.exports = app;
