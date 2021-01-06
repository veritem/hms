import express from 'express'
import {
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/orders'
import advancedResults from '../middleware/advancedResults'
import Orders from '../models/Orders'
const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Orders:
 *      properties:
 *       user:
 *         type: string
 *       order_details:
 *         type: string
 *       isPaid:
 *         type: boolean
 *       created_at:
 *         type: string
 */

/**
 * @swagger
 * /api/v1/orders:
 *  get:
 *    tags:
 *    - [Orders]
 *    description: Use to request all products
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/v1/orders/{order_id}:
 *  get:
 *    tags:
 *    - [Orders]
 *    description: Use to request all products
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/v1/orders:
 *   post:
 *    tags:
 *      - [Orders]
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
 *              $ref: '#/components/schemas/Orders'
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

/**
 * @swagger
 * /api/v1/orders/{order_id}:
 *   put:
 *    tags:
 *      - [Orders]
 *    description: Create a product
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
 *    requestBody:
 *        required: true
 *        content:
 *         application/json:
 *            schema:
 *              $ref: '#/components/schemas/Orders'
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

/**
 * @swagger
 * /api/v1/orders/{order_id}:
 *   delete:
 *    tags:
 *      - [Orders]
 *    description: delete an order
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: "id"
 *        in: path
 *        required: true
 *    responses:
 *      201:
 *        description: deleted
 *      404:
 *        description: Not found
 *      500:
 *        description: Internal Server error
 */

router.route('/').get(advancedResults(Orders, 'user'))
router.route('/:id').get(getOrder).put(updateOrder).delete(deleteOrder)

module.exports = router
