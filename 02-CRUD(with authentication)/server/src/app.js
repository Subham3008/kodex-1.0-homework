const express = require("express")
require("dotenv").config()
const authRoute = require("./routes/user.route")


const app = express()
app.use(express.json())

app.use("/api/auth", authRoute)



module.exports = app