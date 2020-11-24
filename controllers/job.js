const Job = require('../models/Job')
const asyncHandler = require('../middleware/async')

/**
 * Getting all Jobs
 * GET /api/v1/Jobs
 */

exports.getJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find()
  res.status(200).json({ success: true, data: jobs })
})

/**
 * Getting single Job by id
 * GET /api/v1/Jobs/:id
 */
exports.getJob = asyncHandler(async (req, res) => {
  const Job = await Job.findById(req.params.id)
  res.status(200).json({ success: true, data: Job })
})

/**
 * create a new Job
 * POST /api/v1/Jobs
 */
exports.createJob = asyncHandler(async (req, res) => {
  const job = await Job.create(req.body)
  res.status(201).json({
    success: true,
    data: job,
  })
})

/**
 * create a new Job
 * PUT /api/v1/Jobs/:id
 */
exports.updateJob = asyncHandler(async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  res.status(200).json({
    success: true,
    data: job,
  })
})

/**
 * create a new Job
 * DELETE /api/v1/Jobs/:id
 */
exports.deleteJob = asyncHandler(async (req, res) => {
  await job.findByIdAndDelete(req.params.id)

  res.status(200).json({
    success: true,
    data: {},
  })
})
