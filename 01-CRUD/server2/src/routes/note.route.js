const express = require("express")
const { createNoteController, getNotesController } = require("../controllers/note.controller")


const router = express.Router()

//create notes api
router.post("/notes", createNoteController)

//read notes
router.get("/notes", getNotesController)

module.exports = router
