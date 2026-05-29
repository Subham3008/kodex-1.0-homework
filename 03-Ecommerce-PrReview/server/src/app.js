const express = require("express")
require("dotenv").config()
const cookieparser = require("cookie-parser")

const authRoutes = require("./routes/user.route")
const productRoutes = require("./routes/product.route")


const app = express()

app.use(express.json())
app.use(cookieparser())

//-----auth api routes middleware------->>
app.use("/api/auth", authRoutes)

//------product api routes middleware------------>>
app.use("/api/products", productRoutes)

module.exports = app