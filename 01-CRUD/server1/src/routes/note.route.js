const express = require("express")
const { createNoteController, getNotesController, updateNoteController, deleteNoteController } = require("../controllers/note.controller")

const router = express.Router()

//create notes api
router.post("/notes", createNoteController)

//read notes
router.get("/notes", getNotesController)

//update note
router.patch("/notes/:id", updateNoteController)

//delete note
router.delete("/notes/:id", deleteNoteController)

module.exports = router