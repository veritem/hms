import express from 'express'
import { register, login, getMe } from '../controllers/auth'
import { protect } from '../middleware/auth'
import { route } from './users'
const router = express.Router()

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *    tags:
 *      - users
 *    description: Login into the account
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: body
 *        description: Your account credentials
 *        in: body
 *        required: true
 *        schema:
 *         type: object
 *         required:
 *           - email
 *           - password
 *         properties:
 *           email:
 *            type: string
 *           password:
 *            type: string
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
 * /api/v1/auth/register:
 *   post:
 *    tags:
 *      - users
 *    description: Register a new account
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: body
 *        description: Your account credentials
 *        in: body
 *        required: true
 *        schema:
 *          $ref: '#/definitions/users'
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
 * /api/v1/auth/me:
 *   get:
 *    tags:
 *      - users
 *    description: Get current logged in user
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: Token
 *        description: Auth token here
 *        in: parameter
 *        required: true
 *    security:
 *     - jwt: []
 *    responses:
 *      201:
 *        description: created
 *      400:
 *        description: bad request
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      404:
 *        description: Not found
 *      500:
 *        description: Internal Server error
 */

router.post('/register', register)
router.post('/login', login)
router.get('/me', protect, getMe)
module.exports = router
