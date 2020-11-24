const express = require('express')
const {
    createApplyJob,
    getApplyJobs,
    updateApplyJob,
    deleteApplyJob,
    getOneJobApply
} = require('../controllers/applyJob')

const router = express.Router({ mergeParams: true })

router.route('/').get(getApplyJobs).post(createApplyJob)

router.route('/:id').get(getOneJobApply).put(updateApplyJob).delete(deleteApplyJob);

module.exports = router