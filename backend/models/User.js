import mongoose, { Schema } from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userShema = new Schema({
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
  role: {
    type: String,
    enum: [
      'manager',
      'employee',
      'receptionist',
      'housekeeper',
      'customer',
      'security-services',
      'medical-service',
      'accountant',
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
 * the password get's hashed before saving in the db
 */
userShema.pre('save', async function (next) {
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

userShema.methods.createToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SCRET, {
    expiresIn: process.env.JWT_EXPIRE,
  })
}

/**
 * Method to match password from hashed one to unhashed one
 * This will called in code
 */

userShema.methods.matchPasswords = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

// export default mongoose.model('User', userShema)
module.exports = mongoose.model('User', userShema)
