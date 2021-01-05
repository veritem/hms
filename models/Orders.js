import mongoose, { Schema } from 'mongoose'

const OrderSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  order_details: [
    {
      product: {},
    },
  ],
})

module.exports = mongoose.model('Order', OrderSchema)
