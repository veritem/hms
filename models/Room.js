import mongoose, { Schema } from 'mongoose'

const RoomSchema = new Schema({
  type: {
    enum: ['SINGLE', 'DOUBLE', 'TRIPLE', 'CONFERENCE', 'OTHER'],
  },
  status: {
    enum: ['ACTIVE', 'BOOKED', 'IDLE'],
    default: 'IDLE',
  },
  number_of_people: {
    type: String,
  },
  room_description: {
    type: String,
  },
})

module.exports = mongoose.model('Room', RoomSchema)
