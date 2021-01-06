import express from 'express'
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

module.exports = router
