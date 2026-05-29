const express = require("express")
const { registerController, loginController } = require("../controllers/user.controller")

const routes = express.Router()

/**
 * @route POST /api/auth/register
 * @description Register a new user need name, email and password in the request body
 * @access Public
 */
routes.post("/register", registerController)

/**
 * @route POST /api/auth/login
 * @description login a new user need email and password in the request body
 * @access Public
 */
routes.post("/login", loginController)


module.exports = routes