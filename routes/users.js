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
 * /user:
 *  get:
 *    tags:
 *    - "users"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 *
 * @swagger
 * paths:
 *   /user:
 *     post:
 *       tags:
 *       - "users"
 *     description: register new user
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "add all required info to user"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/users"
 *       responses:
 *        '201':
 *          description: User added sussesfully
 */

/**
 * @swagger
 * /user/{id}:
 *    get:
 *      tags:
 *       - "users"
 *      description: Use to return user by id
 *    parameters:
 *      - name: id
 *        in: query
 *        description: id of the user
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */

/**
 * @swagger
 * /user:
 *    put:
 *      tags:
 *      - "users"
 *      description: used to update users info
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */

/**
 * @swagger
 * /user/{id}:
 *    delete:
 *      tags:
 *      - "users"
 *      description: all to delete a specific user
 *    parameters:
 *      - name: id
 *        in: query
 *        description: Name of  with this id
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: user deleted successfully
 */

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router
