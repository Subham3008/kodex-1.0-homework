const express = require("express")
const { registerController } = require("../controllers/user.controller")

const routes = express.Router()

/**
 * @route POST /api/auth/register
 * @description Register a new user need name and email in the request body
 * @access Public
 */
routes.post("/register", registerController)

module.exports = routes