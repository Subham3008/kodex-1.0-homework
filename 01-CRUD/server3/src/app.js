const express = require("express")
require("dotenv").config()
const notesRoutes = require("./routes/note.route")

const app = express()
app.use(express.json())

app.use("/api", notesRoutes)

module.exports = app