import asyncHandler from '../middleware/async'
import Product from '../models/Product'
import ErrorResponse from '../utils/ErrorResponse'

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

exports.addProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body)
  res.status(201).json({ data: product, success: true })
})

exports.updateProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id)

  if (!product)
    new ErrorResponse(`No product found with id ${req.params.id}`, 404)

  const newProduct = await Product.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({ success: true, data: newProduct })
})
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  if (!product)
    new ErrorResponse(`No product found with id ${req.params.id}`, 404)
  await product.remove()
  res.status(200).json({ success: true, data: {} })
})
