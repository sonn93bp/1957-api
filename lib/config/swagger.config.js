const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yaml");

const fileAdmin = fs.readFileSync("./swagger-admin.yaml", "utf8");
const fileUser = fs.readFileSync("./swagger-user.yaml", "utf8");
const swaggerAdminDocs = YAML.parse(fileAdmin);
const swaggerUserDocs = YAML.parse(fileUser);

function setupSwagger(app) {
  app.use(
    "/api-docs/admin",
    swaggerUi.serve,
    swaggerUi.setup(swaggerAdminDocs)
  );
  app.use("/api-docs/user", swaggerUi.serve, swaggerUi.setup(swaggerUserDocs));
}

module.exports = setupSwagger;
