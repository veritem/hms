import asyncHandler from '../middleware/async'
import Product from '../models/Product'

exports.getProducts = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

exports.getProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params

  const product = await Product.findById(id)

  if (!product)
    return res
      .status(401)
      .json({ success: false, message: 'Not product found with this id' })

  res.status(201).json({
    success: true,
    data: product,
  })
})
