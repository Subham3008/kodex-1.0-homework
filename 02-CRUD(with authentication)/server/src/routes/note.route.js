const express = require("express")
const { createNoteController, getNotesController, updateNoteController, deleteNoteController } = require("../controllers/note.controller")
const verifyJwt = require("../middlewares/auth.middleware")




const router = express.Router()

//create notes api
router.post("/notes", verifyJwt, createNoteController)

//read notes
router.get("/notes", verifyJwt, getNotesController)

//update note
router.patch("/notes/:id", verifyJwt, updateNoteController)

//delete notes
router.delete("/notes/:id", verifyJwt, deleteNoteController)



module.exports = router
