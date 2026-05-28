const express = require("express")
const { registerController } = require("../controllers/user.controller")


const router = express.Router()

//create user register api
router.post("/register", registerController)

module.exports = router