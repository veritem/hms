import mongoose, { Schema } from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
  firstName: {
    type: String,
    require: [true, 'Please first name is required'],
  },
  lastName: {
    type: String,
    require: [true, 'Please  last name is required'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  phone: {
    type: String,
    required: [true, 'Please add phone number'],
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
    enum: ['Male', 'Female'],
  },
  role: {
    type: String,
    enum: [
      'manager',
      'employee',
      'receptionist',
      'housekeeper',
      'customer',
      'security-service',
      'medical-service',
      'accountant',
      'supplier',
      'other',
    ],
    default: 'customer',
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

/** this method run automatically on save and update to ensure
 * the password gets hashed before saving in the db
 */
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

/**
 * Method to sign jwt token
 * This will called in code
 */

userSchema.methods.createToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  })
}

/**
 * Method to match password from hashed one to passed one
 * This will called in code
 */

userSchema.methods.matchPasswords = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('User', userSchema)
