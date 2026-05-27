const express = require("express")
const { createNoteController } = require("../controllers/note.controller")

const router = express.Router()

//create notes api
router.post("/notes", createNoteController)

module.exports = router