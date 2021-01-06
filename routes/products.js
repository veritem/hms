import express from 'express'
import advancedResults from '../middleware/advancedResults'
const router = express.Router()
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product'
import Product from '../models/Product'

/**
 * @swagger
 * components:
 *   schemas:
 *     Products:
 *      properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       price:
 *         type: number
 *       inStock:
 *         type: number
 */

/**
 * @swagger
 * /api/v1/products:
 *  get:
 *    tags:
 *    - [Products]
 *    description: Use to request all products
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/v1/products/{product_id}:
 *   get:
 *    tags:
 *      - [Products]
 *    description: Get product by id
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: job_id
 *        in: path
 *        required: true
 *    responses:
 *      201:
 *        description: updated
 *      404:
 *        description: Not found
 *      500:
 *        description: Internal Server error
 */

/**
 * @swagger
 * /api/v1/products:
 *   post:
 *    tags:
 *      - [Products]
 *    description: Create a product
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    requestBody:
 *        required: true
 *        content:
 *         application/json:
 *            schema:
 *              $ref: '#/components/schemas/Products'
 *    responses:
 *      201:
 *        description: created
 *      400:
 *        description: bad request
 *      404:
 *        description: Not found
 *      500:
 *        description: Internal Server error
 */

router.route('/').get(advancedResults(Product), getProducts).post(addProduct)
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct)

module.exports = router
