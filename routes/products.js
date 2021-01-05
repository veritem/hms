import express from 'express'
const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Products:
 *      properties:
 *       JobName:
 *         type: string
 *       jobCategory:
 *         type: string
 *       JobType:
 *         type: string
 *       industries:
 *         type: string
 *       employment_type:
 *         type: string
 *         enum: ['full-time','part-time','casual','fixed-term','shift-workers','daily-hire-and-weekly-hire','probation','apprentices-and-trainees','out-workers']
 *       region:
 *         type: string
 *       experience_level:
 *         type: string
 *       education_level:
 *         type: string
 *       number_of_positions:
 *         type: string
 */

module.exports = router
