const productModel = require("../models/product.model");
const { createProductService, getProductService } = require("../services/product.service");
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

module.exports = {
  createProductController,
  getAllProductsController,
}