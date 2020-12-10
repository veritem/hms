const express = require('express')
const asyncHandler = require('../middleware/async')
const ApplyJob = require('../models/applyJob')
const multer = require('multer')
const router = express()
const fs = require('fs')
const { route } = require('../routes/job')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets/cvs')
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, file.originalname)
  },
})

exports.upload = multer({ storage: storage })

exports.createApplyJob = asyncHandler(async (req, res) => {
  const applyJob = await ApplyJob.create(req.body)
  res.status(201).json({
    success: true,
    data: applyJob,
  })
})

exports.uploadCV = async (req, res, next) => {
  try {
    const applyJobInfo = await ApplyJob.findOne({ _id: req.params.id })
    console.log(req.file.filename)

    if (!applyJobInfo) {
      fs.unlink('assets/cvs/' + req.file.filename, () => {
        return res.status(404).send('id not found')
      })
    }
    applyJobInfo.cv = req.file.filename
    applyJobInfo.save()
    res.status(201).json({ success: true, data: applyJobInfo })
  } catch (error) {
    console.error(error)
  }
}

exports.getApplyJobs = asyncHandler(async (req, res) => {
  const applyJob = await ApplyJob.find()
  res.status(200).json({
    success: true,
    data: applyJob,
  })
})

exports.getOneJobApply = asyncHandler(async (req, res) => {
  const applyJob = await ApplyJob.findOne({ _id: req.params.id })
  res.status(200).send({
    success: true,
    data: applyJob,
  })
})

exports.updateApplyJob = async (req, res) => {
  const applyJob = await ApplyJob.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  res.status(200).json({
    success: true,
    data: applyJob,
  })
}

exports.deleteApplyJob = asyncHandler(async (req, res) => {
  const applyJobInfo = await ApplyJob.findOne({ _id: req.params.id })
  if (!applyJobInfo) return res.status(404).send('id not found')

  let path = `assets/cvs/${applyJobInfo.cv}`
  fs.exists(path, (exists) => {
    if (exists) {
      fs.unlink(path, () => {})
    }
  })
  const applyJob = await ApplyJob.findByIdAndDelete(req.params.id)

  res.status(200).json({
    success: true,
    data: applyJob,
  })
})
exports.router = router
