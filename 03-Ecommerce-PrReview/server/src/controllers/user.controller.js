const { registerService } = require("../services/auth.service")


const registerController = async (req, res) => {

  const { newUser, accessTK, refreshTK } = await registerService(req.body)

  //----save tokens inside cookies-------->>
  res.cookie("accessToken", accessTK, {
    httpOnly: true,
    maxAge: 15 * 60 * 1000,
  })

  res.cookie("refreshToken", refreshTK, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  })

  return res.status(201).json({
    message: "User created successfully.",
    user: newUser,
  })

}


module.exports = {
  registerController,
}