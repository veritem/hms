import mongoose, { Schema } from 'mongoose'

const BookingSchema = new Schema({
  number: {
    type: String,
  },
  date_from: {
    type: Date,
  },
  date_to: {
    type: Date,
  },
  rooms: [
    {
      room: {
        type: mongoose.Schema.ObjectId,
        ref: 'Room',
        required: true,
      },
    },
  ],
  number_of_adults: {
    type: Number,
  },
  number_of_children: {
    type: Number,
  },
  status: {
    enum: ['ACTIVE', 'PENDING', 'INACTIVE', 'FINISHED'],
    default: 'INACTIVE',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Room', BookingSchema)
