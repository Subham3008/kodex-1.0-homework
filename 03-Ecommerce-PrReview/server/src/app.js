const express = require("express")
require("dotenv").config()
const cookieparser = require("cookie-parser")

const authRoutes = require("./routes/user.route")


const app = express()

app.use(express.json())
app.use(cookieparser())

//-----auth routes------->>
app.use("/api/auth", authRoutes)


module.exports = app