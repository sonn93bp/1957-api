const app = require("express").Router();
const controller = require("../../controllers/feedback.controller");
app.route("/").post(controller.create).get(controller.get);
app
  .route("/:id")
  .put(controller.update)
  .get(controller.getOne)
  .delete(controller.deleteById);
module.exports = app;
