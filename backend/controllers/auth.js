import ErrorResponse from '../utils/ErrorResponse'
import asyncHandler from '../middleware/async'
const User = require('../models/User')
// import User from '../models/User'

/**
 * POST
 * desc: user registration
 */
exports.register = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, phone, gender, role, password } = req.body

  const user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    gender,
    role,
    password,
  })

  sendTokenResponse(user, 200, res)
})

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password)
    return next(new ErrorResponse('Please fill all fields', 400))

  const user = await User.findOne({ email }).select('+password')

  if (!user) return next(new ErrorResponse('Invalid email or password', 401))

  // check if password matches
  const isMatch = await user.matchPassowords(password)

  if (!isMatch) return next(new ErrorResponse('Invalid email or password', 401))

  sendTokenResponse(user, 200, res)
})

//get currentloggedin user
exports.getMe = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: req.user,
  })
})

/**
 * this is resuable function to return auth-tokens
 * @param { user object} user
 * @param { statuscode } statusCode
 * @param { json_response to the user} res
 */
const sendTokenResponse = (user, statusCode, res) => {
  const token = user.createToken()
  res.status(statusCode).json({ success: true, token })
}
