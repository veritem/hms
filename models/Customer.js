const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
  customer_names: {
    type: String,
    required: [true, 'Please name is required'],
  },
  customer_phone_number: {
    type: Number,
    required: [true, 'Please phone number is required'],
  },
  customer_location: {
    type: String,
    required: [true, 'Please customer location is required'],
  },
  customer_email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  customer_password: {
    type: String,
    required: [true, 'Please add a password'],
  },
  customer_gender: {
    type: String,
    require: [true, 'Please add an employee gender'],
  },
  customer_national_id: {
    type: String,
    required: [true, 'Please add a national id '],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  customer_status: {
    type: String,
    enum: ['ACTIVE,INACTIVE'],
    default: 'ACTIVE',
  },
})

module.exports = mongoose.model('Customer', customerSchema)
