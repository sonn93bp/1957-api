const express = require("express");

const app = express.Router();

app.use("/admin", require("./admin"));

app.use("/", require("./user"));

app.use("/auth", require("./auth.route"));

module.exports = app;
