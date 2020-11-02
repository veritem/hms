const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
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

module.exports = mongoose.model('User', userShema)
