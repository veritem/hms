import mongoose, { Schema } from 'mongoose'

const OrderSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  order_details: [
    {
      product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
  ],
  isPaid: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = mongoose.model('Order', OrderSchema)
