const express = require('express')
const {
    createApplyJob,
    getApplyJobs,
    updateApplyJob,
    deleteApplyJob,
    getOneJobApply,
    uploadCV,
    upload
} = require('../controllers/ApplyJob')

const router = express.Router({ mergeParams: true })

/**
 * @swagger
 * definitions:
 *   ApplyJob:
 *     properties:
 *       first_name:
 *         type: string
 *       last_name: 
 *         type: string
 *       email:
 *         type: string
 *       jobId:  
 *         type: string
 *       region:
 *         type: string
 *       cv:
 *         type: file  
 */

/**
 * @swagger
 * definitions:
 *   uploadCv:
 *     properties:
 *       _id:
 *         type: string
 *       cv: 
 *         type: string 
 */

 /**
 * @swagger
 * /api/v1/ApplyJob:
 *  get:
 *    tags:
 *    - "ApplyJob"
 *    description: Use to request all applied applyJobs
 *    responses:
 *      '200':
 *        description: A successful response
 */
 
/**
 * @swagger
 * /api/v1/ApplyJob:
 *   post:
 *    tags:
 *      - ApplyJob
 *    description: Create an application for applyJob
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: body
 *        description: Fields for application for applyJob
 *        in: body
 *        required: true
 *        schema:
 *          $ref: '#/definitions/ApplyJob'
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
 * /api/v1/applyJob/{applyJob_id}:
 *   put:
 *    tags:
 *      - ApplyJob
 *    description: Update a applyJob
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: applyJob_id
 *        in: path
 *        required: true
 *      - name: body
 *        description: Fields for a applyJob
 *        in: body
 *        required: true
 *        schema:
 *          $ref: '#/definitions/ApplyJob'
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
 * /api/v1/applyJob/{applyJob_id}:
 *   delete:
 *    tags:
 *      - ApplyJob
 *    description: delete a job
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: "applyJob_id"
 *        in: path
 *        required: true
 *        schema:
 *          $ref: '#/definitions/ApplyJob'
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
 * /api/v1/applyJob/{applyJob_id}:
 *   get:
 *    tags:
 *      - ApplyJob
 *    description: get one a job
 *    consumes:
 *      - "application/json"
 *      - "application/xml"
 *    produces:
 *      - "application/xml"
 *      - "application/json"
 *    parameters:
 *      - name: "applyJob_id"
 *        in: path
 *        required: true
 *        schema:
 *          $ref: '#/definitions/ApplyJob'
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
 * /api/v1/applyJob/uploadCV/{id}:
 *   post:
 *    tags:
 *      - uploadCv
 *    description: Create for upload job
 *    consumes:
 *      - multipart/form-data
 *    parameters:
 *      - name: cv
 *        in: formData 
 *        type: file
 *        description: The file to upload
 *      - name: id
 *        in: path
 *        required: true
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

router.route('/').get(getApplyJobs).post(createApplyJob)

router.route('/:id').get(getOneJobApply).put(updateApplyJob).delete(deleteApplyJob);
router.route('/uploadCv/:id').post([upload.single('cv'),uploadCV]);

module.exports = router