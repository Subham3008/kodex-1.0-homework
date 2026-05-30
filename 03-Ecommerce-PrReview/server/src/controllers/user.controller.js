const { registerService, loginService, googleCallbackService } = require("../services/auth.service")

//-----register controller-------------->>
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

//--------login controller--------------->>
const loginController = async (req, res) => {

  const { isExisted, accessTK, refreshTK } = await loginService(req.body)

  //--------save token inside cookies-------->>
  res.cookie("accessToken", accessTK, {
    httpOnly: true,
    maxAge: 15 * 60 * 1000,
  })

  res.cookie("refreshToken", refreshTK, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  })


  return res.status(200).json({
    message: "User loggedIn successfully.",
    user: isExisted
  })

}

//-------google controller--------->>
const googleCallbackController = async (req, res) => {
  const { accessToken, refreshToken } = await googleCallbackService(req)

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    maxAge: 15 * 60 * 1000,
  })

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  })

  return res.status(201).json({
    message: "User created successfully."
  })

}


module.exports = {
  registerController,
  loginController,
  googleCallbackController,
}