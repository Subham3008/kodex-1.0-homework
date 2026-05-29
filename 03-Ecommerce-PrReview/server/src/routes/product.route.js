const express = require("express")
const verifyJwt = require("../middlewares/auth.middleware")
const { createProductController, getAllProductsController, deleteProductController, getSingleProductController, getProductByCategoryController, updateProductController } = require("../controllers/product.controller")
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


/**
* @route GET /api/products
* @description get all products
* @access Public
*/
//---------get all product------->>
router.get("/", getAllProductsController)


/**
 * @route DELETE /api/products/:id
 * @description delete all products need user id ifrom the req.params
 * @access Private
 */
//----------delete product---------->>
router.delete("/delete/:id", verifyJwt, deleteProductController)

/**
 * @route GET /api/products/:id
 * @description get single product need product id from req.params
 * @access Public
 */
//-------get single product by product id------->>
router.get("/:id", getSingleProductController)


/**
 * @route GET /api/products/filter?category=cloths
 * @description get product by category need product category from req.query
 * @access Public
 */
//--------get products by category----------->>
router.get("/filter", getProductByCategoryController)

/**
 * @route PUT /api/products/:id
 * @description update product need product._id from req.params
 * @access Private
 */
//--------update product by _id----------->>
router.put("/:id",
  verifyJwt,
  upload.array("images", 5),
  updateProductController)

module.exports = router