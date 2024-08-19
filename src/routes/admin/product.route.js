const app = require("express").Router();
const controller = require("../../controllers/product.controller");

/**
 * @openapi
 * tags:
 *   name: Products
 *   description: Product management operations
 */
/**
 * @openapi
 * /admin/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       description: Product details to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad request
 */
app.route("/").post(controller.create).get(controller.getAll);

app
  .route("/:id")
  .put(controller.update)
  .get(controller.getOne)
  .delete(controller.deleteById);
module.exports = app;
