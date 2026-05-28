const express = require("express")
require("dotenv").config()
const cookieParser = require("cookie-parser")
const authRoute = require("./routes/user.route")
const noteRoute = require("./routes/note.route")


const app = express()
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoute)
app.use("/api", noteRoute)



module.exports = app