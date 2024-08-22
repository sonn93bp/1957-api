const express = require("express");
const passport = require("passport");
const app = express.Router();
app.use(passport.authenticate("jwt", { session: false }));
app.use("/users", require("./user.route"));
app.use("/slider", require("./slider.route"));
app.use("/about", require("./about.route"));
app.use("/benefits", require("./benefits.route"));
app.use("/contact", require("./contact.route"));
app.use("/news", require("./news.route"));
/**
 * @openapi
 * tags:
 *   name: Products
 *   description: Product management
 */
app.use("/products", require("./product.route"));
app.use("/projects", require("./project.route"));
app.use("/services", require("./service.route"));
app.use("/files", require("./files.route"));
app.use("/requests", require("./request.route"));
app.use("/policies", require("./policy.route"));
module.exports = app;
