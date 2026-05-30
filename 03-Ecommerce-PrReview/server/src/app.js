const express = require("express")
require("dotenv").config()
const cookieparser = require("cookie-parser")

const authRouter = require("./routes/user.route")
const productRouter = require("./routes/product.route")


const app = express()

app.use(express.json())
app.use(cookieparser())

//-----auth api routes middleware------->>
app.use("/api/auth", authRouter)

//------product api routes middleware------------>>
app.use("/api/products", productRouter)

module.exports = app