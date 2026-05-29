const productModel = require("../models/product.model");
const { createProductService, getProductService, deleteProductService, getSingleProductService } = require("../services/product.service");
const ApiError = require("../utils/apiError");

//---------------create product controller----------->>
const createProductController = async (req, res) => {
  const { product } = await createProductService(req)

  return res.status(201).json({
    success: true,
    message: "Product created successfully.",
    product,
  });
}

//-------------get all product----------->>
const getAllProductsController = async (req, res) => {

  const products = await getProductService()

  return res.status(200).json({
    success: true,
    message: "Product fetched successfully.",
    products: products,
  });
}

//------delete controller-------->>
const deleteProductController = async (req, res) => {

  const deleteProduct = await deleteProductService(req)

  return res.status(200).json({
    success: true,
    message: "Product deleted successfully.",
  });
}

//-------get single product-------->>
const getSingleProductController = async (req, res) => {

  const product = await getSingleProductService(req.params)

  return res.status(200).json({
    success: true,
    message: "Product fetched successfully.",
    product,
  });

}

module.exports = {
  createProductController,
  getAllProductsController,
  deleteProductController,
  getSingleProductController,
}