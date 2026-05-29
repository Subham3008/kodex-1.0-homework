const productModel = require("../models/product.model");
const ApiError = require("../utils/apiError");
const uploadToImagekit = require("../utils/imagekit.helper");

const createProductService = async (req) => {

  const { productName, description, price, category } = req.body;

  //----------validation---------->>

  if (!productName || !price) {
    throw new ApiError(
      400,
      "Product name and price are required."
    );
  }

  if (productName.trim().length < 3) {
    throw new ApiError(
      400,
      "Product name must be at least 3 characters long."
    );
  }

  if (Number(price) <= 0) {
    throw new ApiError(
      400,
      "Price must be greater than 0."
    );
  }

  //----------multiple image upload---------->>
  let uploadedImages = []

  if (req.files && req.files.length > 0) {
    for (const file of req.files) {

      //----upload to imagekit---->>
      const uploadedImage =
        await uploadToImagekit(
          file,
          file.originalname,
          "/products"
        );

      //----store only image url---->>
      uploadedImages.push(uploadedImage.url);
    }

  }

  //----------create product---------->>

  const product = await productModel.create({
    user: req.user.id,
    productName,
    description,
    price,
    category,
    images: uploadedImages,
  });

  return product
}

module.exports = {
  createProductService,
}