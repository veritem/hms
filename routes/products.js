import express from 'express'
import advancedResults from '../middleware/advancedResults'
const router = express.Router()
import { getProducts, getProduct } from '../controllers/product'
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

router.route('/').get(advancedResults(Product), getProducts)
router.route('/:id').get(getProduct)
module.exports = router
