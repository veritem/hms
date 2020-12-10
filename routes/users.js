const express = require('express')
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/users')
const { protect } = require('../middleware/auth')

const router = express.Router({ mergeParams: true })

/**
 * @swagger
 * components:
 *   schemas:
 *     users:
 *      properties:
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       email:
 *         type: string
 *       phone:
 *         type: string
 *       gender:
 *         type: string
 *         enum: [Male,Female]
 *       role:
 *         type: string
 *         enum: [customer,manager,receptionist,housekeeper,security-services,medical-service,accountant]
 *       password:
 *         type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     login:
 *      properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 */

/**
 * @swagger
 * /api/v1/users:
 *   post:
 *    tags:
 *      - users
 *    description: Create new user
 *    consumes:
 *      - "application/json"
 *    produces:
 *      - "application/json"
 *    requestBody:
 *      description: New user's credentials
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/users'
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
 * path:
 * /api/v1/users:
 *  get:
 *    tags:
 *    - users
 *    description: Use to request all users
 *    responses:
 *     '200':
 *        description: A successful response
 *     '400':
 *         description: bad request
 *     '404':
 *         description: Not found
 *     '500':
 *         description: Internal Server error
 */

/**
 * @swagger
 * path:
 * /api/v1/users/{id}:
 *  get:
 *    security:
 *    - bearerAuth: []
 *    tags:
 *    - users
 *    description: Use to request all users
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: user id goes here
 *    responses:
 *     '200':
 *        description: A successful response
 *     '400':
 *         description: bad request
 *     '401':
 *        description: Authorization information is missing or invalid.
 *     '404':
 *         description: Not found
 *     '500':
 *         description: Internal Server error
 */

/**
 * @swagger
 * /api/v1/users/{id}:
 *   put:
 *    security:
 *    - bearerAuth: []
 *    tags:
 *      - users
 *    description: Update user info
 *    consumes:
 *      - "application/json"
 *    produces:
 *      - "application/json"
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *      - name: body
 *        description: Fields for a user id
 *        in: body
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/users'
 *    responses:
 *      201:
 *        description: updated
 *      404:
 *        description: Not found
 *      401:
 *        description: Authorization information is missing or invalid.
 *      500:
 *        description: Internal Server error
 */

/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *    security:
 *    - bearerAuth: []
 *    tags:
 *      - users
 *    description: delete user
 *    consumes:
 *      - "application/json"
 *    produces:
 *      - "application/json"
 *    parameters:
 *      - name: "id"
 *        in: path
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/users'
 *    responses:
 *      201:
 *        description: deleted
 *      401:
 *        description: Authorization information is missing or invalid.
 *      404:
 *        description: Not found
 *      500:
 *        description: Internal Server error
 */

router.route('/').get(getUsers).post(createUser)
router
  .route('/:id')
  .get(getUser)
  .put(protect, updateUser)
  .delete(protect, deleteUser)

module.exports = router
