import mongoose, { Schema } from 'mongoose'

const itemSchema = new Schema({
  itemName: {
    type: String,
    required: [true, 'Please item name is required'],
  },
  supplier: {
    type: String,
    required: [true, 'Please supplier_id is required'],
  },
  itemType: {
    type: String,
    enum: ['foods', 'machine', 'laundry work', 'other'],
    default: 'other',
  },
  item_details: {
    type: String,
    required: [true, 'Please add an item detail'],
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'SOLD', 'INACTIVE'],
  },
})

module.exports = mongoose.model('Item', itemSchema)
