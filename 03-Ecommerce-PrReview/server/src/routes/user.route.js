const express = require("express")
const { registerController, loginController, googleCallbackController } = require("../controllers/user.controller")
const passport = require("../config/passport")

const router = express.Router()

/**
 * @route POST /api/auth/register
 * @description Register a new user need name, email and password in the request body
 * @access Public
 */
router.post("/register", registerController)

/**
 * @route POST /api/auth/login
 * @description login a new user need email and password in the request body
 * @access Public
 */
router.post("/login", loginController)


router.get("/google", passport.authenticate("google", {
  scope: ["profile", "email"],
  session: false,
}))

router.get("/google/callback", passport.authenticate("google",
  {
    failureRedirect: "/",
    session: false,
  }
), googleCallbackController)


module.exports = router