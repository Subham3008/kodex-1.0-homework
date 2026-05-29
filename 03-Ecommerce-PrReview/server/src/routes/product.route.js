const express = require("express")
const verifyJwt = require("../middlewares/auth.middleware")
const { createProductController } = require("../controllers/product.controller")
const upload = require("../middlewares/multer.middleware")

const router = express.Router()

/**
 * @route POST /api/products/create
 * @description create a new product need  productName, description, price, category and productImage in the req.body and req.files
 * @access Private
 */
//------create new product------->>
router.post("/create",
  verifyJwt,
  upload.array("images", 5),
  createProductController)

module.exports = router