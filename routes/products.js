import express from 'express'
import advancedResults from '../middleware/advancedResults'
const router = express.Router()
import { getProducts } from '../controllers/product'
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
router.route('/').get(advancedResults(Product), getProducts)

module.exports = router
