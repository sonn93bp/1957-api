const express = require("express");

const app = express.Router();

app.use("/admin", require("./admin"));

app.use("/", require("./user"));

module.exports = app;
