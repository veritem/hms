import express from 'express'
import {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
} from '../controllers/items'
import { authorize, protect } from '../middleware/auth'

const router = express.Router({ mergeParams: true })

/**
 * @swagger
 * components:
 *   schemas:
 *     Items:
 *      properties:
 *       itemName:
 *         type: string
 *       supplier_id:
 *         type: string
 *       itemType:
 *         type: string
 *       item_details:
 *         type: string
 *       status:
 *         type: string
 *         enum: [ACTIVE,PENDING,INACTIVE]
 */

/**
 * @swagger
 * /api/v1/items:
 *  get:
 *    tags:
 *    - "items"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/v1/items:
 *   post:
 *    tags:
 *      - items
 *    description: Create a item
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: body
 *        description: Fields for an item
 *        in: body
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/Items'
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
 * /api/v1/items/{item_id}:
 *   put:
 *    tags:
 *      - items
 *    description: Update a item
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: item_id
 *        in: path
 *        required: true
 *      - name: body
 *        description: Fields for a item
 *        in: body
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/Items'
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
 * /api/v1/items/{item_id}:
 *   delete:
 *    tags:
 *      - items
 *    description: Update a item
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: "item_id"
 *        in: path
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/Items'
 *    responses:
 *      201:
 *        description: deleted
 *      404:
 *        description: Not found
 *      500:
 *        description: Internal Server error
 */

/**
 * @swagger
 * /api/v1/items/{item_id}:
 *   get:
 *    tags:
 *      - items
 *    description: Update a item
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: "item_id"
 *        in: path
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/Items'
 *    responses:
 *      201:
 *        description: deleted
 *      404:
 *        description: Not found
 *      500:
 *        description: Internal Server error
 */

router
  .route('/')
  .get(protect, getItems)
  .post(protect, authorize('housekeeper'), createItem)
router
  .route('/:id')
  .get(getItem)
  .put(protect, authorize('housekeeper'), updateItem)
  .delete(protect, deleteItem)

module.exports = router
