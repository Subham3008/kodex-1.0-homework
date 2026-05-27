const express = require("express")



const router = express.Router()

//create notes api
router.post("/notes", createNoteController)



module.exports = router
