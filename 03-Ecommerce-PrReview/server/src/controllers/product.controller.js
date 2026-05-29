const { createProductService } = require("../services/product.service");

//---------------create product controller----------->>
const createProductController = async (req, res) => {
  const { product } = await createProductService(req)

  return res.status(201).json({
    success: true,
    message: "Product created successfully.",
    product,
  });
}

module.exports = {
  createProductController,
}