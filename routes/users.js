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
 *         enum: [manager,receptionist,housekeeper,customer,security-services,medical-service,accountant]
 *       password:
 *         type: string
 *       createdAt:
 *         type: string
 */

/**
 * @swagger
 * /api/v1/users:
 *  get:
 *    tags:
 *    - users
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * paths:
 *   /api/v1/users:
 *     post:
 *       tags:
 *       - users
 *     description: register new user
 *     consumes:
 *       - "application/json"
 *       - "application/xml"
 *     produces:
 *       - "application/xml"
 *       - "application/json"
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         description: "add all required info to user"
 *         required: true
 *         schema:
 *           $ref: "#/definitions/users"
 *     responses:
 *       201:
 *         description: created
 *       400:
 *         description: bad request 
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server error
 */

/**
 * @swagger
 * /api/v1/users/{id}:
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
 * /api/v1/users:
 *    put:
 *      tags:
 *      - "users"
 *      description: used to update users info
 *    parameters:
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
 * /api/v1/users/{id}:
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
