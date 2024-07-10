const express = require("express");
const app = express.Router();
app.use("/about", require("./about.route"));
app.use("/contract", require("./contract.route"));
app.use("/news", require("./news.route"));
app.use("/products", require("./product.route"));
module.exports = app;
