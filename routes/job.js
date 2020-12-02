import express from 'express'
import {
  getJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} from '../controllers/job'

const router = express.Router({ mergeParams: true })

// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     Jobs:
//  *     properties:
//  *       JobName:
//  *         type: string
//  *       jobCategory:
//  *         type: string
//  *       JobType:
//  *         type: string
//  *       industries:
//  *         type: string
//  *       employment_type:
//  *         type: string
//  *         enum: ['full-time','part-time','casual','fixed-term','shift-workers','daily-hire-and-weekly-hire','probation','apprentices-and-trainees','out-workers']
//  *       region:
//  *         type: string
//  *       experience_level:
//  *         type: string
//  *       education_level:
//  *         type: string
//  *       number_of_positions:
//  *         type: string
//  */

/**
 * @swagger
 * components:
 *   schemas:
 *     Jobs:
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

/**
 * @swagger
 * /api/v1/postJob:
 *  get:
 *    tags:
 *    - "Jobs"
 *    description: Use to request all jobs
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /api/v1/postJob:
 *   post:
 *    tags:
 *      - Jobs
 *    description: Create a job
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: body
 *        description: Fields for an job
 *        in: body
 *        required: true
 *        schema:
 *          $ref: '#/definitions/Jobs'
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
 * /api/v1/postJob/{job_id}:
 *   put:
 *    tags:
 *      - Jobs
 *    description: Update a job
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: job_id
 *        in: path
 *        required: true
 *      - name: body
 *        description: Fields for a job
 *        in: body
 *        required: true
 *        schema:
 *          $ref: '#/definitions/Jobs'
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
 * /api/v1/postJob/{job_id}:
 *   delete:
 *    tags:
 *      - Jobs
 *    description: delete a job
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: "job_id"
 *        in: path
 *        required: true
 *        schema:
 *          $ref: '#/definitions/Jobs'
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
 * /api/v1/postJob/{job_id}:
 *   get:
 *    tags:
 *      - Jobs
 *    description: Update a job
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: "job_id"
 *        in: path
 *        required: true
 *        schema:
 *          $ref: '#/definitions/Jobs'
 *    responses:
 *      201:
 *        description: deleted
 *      404:
 *        description: Not found
 *      500:
 *        description: Internal Server error
 */
router.route('/').get(getJobs).post(createJob)
router.route('/:id').get(getJob).put(updateJob).delete(deleteJob)

module.exports = router
