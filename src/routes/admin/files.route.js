const app = require("express").Router();
const controller = require("../../controllers/upload.controller");
const { upload } = require("../../../lib/config/storage.config");
app
  .route("/upload")
  .post(upload.array("files[]", 10), controller.uploadMultiFile);

app.route("/delete/:uid").delete(controller.deleteFileById);
module.exports = app;
