const express = require('express')
const {
  getJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} = require('../controllers/job')

const router = express.Router({ mergeParams: true })

/**
 * @swagger
 * definitions:
 *   Jobs:
 *     properties:
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
 *       educational_level:
 *         type: string
 *       number_of_positions:
 *         type: string
 */

/**
 * @swagger
 * tags:
 * - name: "Jobs"
 * paths:
 *   /api/v1/Jobs:
 *   get:
 *    tags:
 *    - "Jobs"
 *    description: Use to request all Jobs
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.route('/').get(getJobs).post(createJob)
router.route('/:id').get(getJob).put(updateJob).delete(deleteJob)

module.exports = router
