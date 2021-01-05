import asyncHandler from '../middleware/async'

exports.getProducts = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})
