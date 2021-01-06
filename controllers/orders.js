import asyncHandler from '../middleware/async'

exports.getOrders = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

exports.getOrder = asyncHandler(async (req, res, next) => {})
exports.updateOrder = asyncHandler(async (req, res, next) => {})
exports.deleteOrder = asyncHandler(async (req, res, next) => {})
