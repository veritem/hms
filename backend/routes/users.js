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
 *       role:
 *         type: string
 *         enum:
 *           - manager
 *           - employee
 *           - receptionist
 *           - housekeeper
 *           - customer
 *           - security-services
 *           - medical-service
 *           - accountant
 *         default: customer
 *       password:
 *         type: string
 *       createdAt:
 *         type: string
 */

/**
 * @swagger
 * tags:
 * - name: "users"
 * paths:
 *   /api/v1/users:
 *   get:
 *    tags:
 *    - "users"
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router
