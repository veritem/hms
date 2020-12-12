import mongoose, { Schema } from 'mongoose'

const itemSchema = new Schema({
  itemName: {
    type: String,
    required: [true, 'Please item name is required']
  },
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		unique: true,
		required: true,
  },
  itemType: {
    type: String,
    enum: [
        'foods',
        'machine',
        'laundry work',
        'other'
    ],
    default: 'other'
  },
  item_details: {
    type: String,
    required: [true, 'Please add an item detail']
  },
  status: {
      type: String,
      enum: [
          'ACTIVE',
          'PENDING',
          'INACTIVE'
      ]
  }
})

module.exports = mongoose.model('Item', itemSchema)
