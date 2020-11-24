const express = require('express')
const {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
} = require('../controllers/items')

const router = express.Router({ mergeParams: true })

/**
 * @swagger
 * definitions:
 *   Items:
 *     properties:
 *       itemName:
 *          type: string
 *       supplier_id:
 *         type: string
 *       itemType:
 *         type: string
 *       item_details:
 *         type: string
 *       status:
 *         type: string
 *         enum:
 *           - ACTIVE,
 *           - PENDING,
 *           - INACTIVE
 *
 */
/**
 * @swagger
 * tags:
 * - name: "Items"
 * paths:
 *   /api/v1/Items:
 *   get:
 *    tags:
 *    - "Items"
 *    description: Use to request all Items
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.route('/').get(getItems).post(createItem)
router.route('/:id').get(getItem).put(updateItem).delete(deleteItem)

module.exports = router
