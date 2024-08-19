const express = require("express");

const app = express.Router();

/**
 * @openapi
 * tags:
 *   name: Admin
 *   description: Admin related routes
 */

/**
 * @openapi
 * tags:
 *   name: User
 *   description: User related routes
 */

/**
 * @openapi
 * tags:
 *   name: Auth
 *   description: Authentication related routes
 */
app.use("/admin", require("./admin"));

app.use("/", require("./user"));

app.use("/auth", require("./auth.route"));

module.exports = app;
