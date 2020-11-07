const User = require('../models/User')
const asyncHandler = require('../middleware/async')

/**
 * Getting all users
 * GET /api/v1/users
 */

exports.getUsers = asyncHandler(async (req, res) => {
  const users = await User.find()
  res.status(200).json({ success: true, data: users })
})

/**
 * Getting single user by id
 * GET /api/v1/users/:id
 */
exports.getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  res.status(200).json({ success: true, data: user })
})

/**
 * create a new user
 * POST /api/v1/users
 */
exports.createUser = asyncHandler(async (req, res) => {
  const user = await User.create(req.body)
  res.status(201).json({
    success: true,
    data: user,
  })
})

/**
 * create a new user
 * PUT /api/v1/users/:id
 */
exports.updateUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  res.status(200).json({
    success: true,
    data: user,
  })
})

/**
 * create a new user
 * DELETE /api/v1/users/:id
 */
exports.deleteUser = asyncHandler(async (req, res) => {
  await User.findByIdAndDelete(req.params.id)

  res.status(200).json({
    success: true,
    data: {},
  })
})
