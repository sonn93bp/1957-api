const app = require("express").Router();
const controller = require("../../controllers/upload.controller");
const { uploadLocal } = require("../../../lib/config/storage.config");
app
  .route("/upload")
  .post(uploadLocal.array("files[]", 10), controller.uploadMultiFile);

app.route("/delete/:uid").delete(controller.deleteFileById);
module.exports = app;
