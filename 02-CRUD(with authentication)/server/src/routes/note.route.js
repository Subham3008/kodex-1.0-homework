const express = require("express")
const { createNoteController, getNotesController } = require("../controllers/note.controller")
const verifyJwt = require("../middlewares/auth.middleware")



const router = express.Router()

//create notes api
router.post("/notes", verifyJwt, createNoteController)

//read notes
router.get("/notes",verifyJwt, getNotesController)



module.exports = router
