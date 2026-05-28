const express = require("express")
const { createNoteController } = require("../controllers/note.controller")
const verifyJwt = require("../middlewares/auth.middleware")



const router = express.Router()

//create notes api
router.post("/notes", verifyJwt, createNoteController)



module.exports = router
