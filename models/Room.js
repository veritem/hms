import mongoose, { Schema } from 'mongoose'

const RoomSchema = new Schema({
  type: {
    enum: ['single', 'double', 'triple', 'meeting', 'other'],
  },
  status: {
    enum: ['ACTIVE', 'BOOKED', 'IDLE'],
    default: 'IDLE',
  },
  number: {
    type: String,
  },
  room_description: {
    type: String,
  },
})

module.exports = mongoose.model('Room', RoomSchema)
