const Item = require('../models/Items')
const asyncHandler = require('../middleware/async')

/**
 * Getting all Items
 * GET /api/v1/Items
 */

exports.getItems = asyncHandler(async (req, res) => {
  const Items = await Item.find()
  res.status(200).json({ success: true, data: Items })
})

/**
 * Getting single Item by id
 * GET /api/v1/Items/:id
 */
exports.getItem = asyncHandler(async (req, res) => {
  const Item = await Item.findById(req.params.id)
  res.status(200).json({ success: true, data: Item })
})

/**
 * create a new Item
 * POST /api/v1/Items
 */
exports.createItem = asyncHandler(async (req, res) => {
  const item = await Item.create(req.body)
  res.status(201).json({
    success: true,
    data: item,
  })
})

/**
 * create a new Item
 * PUT /api/v1/Items/:id
 */
exports.updateItem = asyncHandler(async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  res.status(200).json({
    success: true,
    data: item,
  })
})

/**
 * create a new Item
 * DELETE /api/v1/Items/:id
 */
exports.deleteItem = asyncHandler(async (req, res) => {
  await Item.findByIdAndDelete(req.params.id)
  res.status(200).json({
    success: true,
    data: {},
  })
})
