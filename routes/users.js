const express = require('express')
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/users')

const router = express.Router({ mergeParams: true })

/**
 * @swagger
 * definitions:
 *   users:
 *     properties:
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
 *         enum: [manager,receptionist,housekeeper,customer,security-services,medical-service,accountant]
 *       password:
 *         type: string
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
 *     '404':
 *         description: Not found
 *     '500':
 *         description: Internal Server error
 */

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router
