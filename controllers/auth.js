import ErrorResponse from '../utils/ErrorResponse'
import asyncHandler from '../middleware/async'
import { param } from '../routes/users'
const User = require('../models/User')
// import User from '../models/User'

exports.register = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, phone, gender, role, password } = req.body

  const user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    gender,
    role,
    password
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
  const isMatch = await user.matchPasswords(password)

  if (!isMatch) return next(new ErrorResponse('Invalid email or password', 401))

  sendTokenResponse(user, 200, res)
})

//get currentLogged user

exports.getMe = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: req.user,
  })
})

/**
 * this is reuseable function to return auth-tokens
 * @param { user object} user
 * @param { statuscode } statusCode
 * @param { json_response to the user} res
 */
const sendTokenResponse = (user, statusCode, res) => {
  const token = user.createToken()
  res.status(statusCode).json({ success: true, token })
}

