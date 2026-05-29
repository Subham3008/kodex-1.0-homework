const userModel = require("../models/user.model")
const ApiError = require("../utils/apiError")
const { hashed } = require("../utils/hashed")
const { generateAccessToken, generateRefreshToken } = require("../utils/token")

const registerService = async ({ name, email, password }) => {


  //---------Validation----->>

  if (!name || !password || !email) {
    throw new ApiError(400, "All fields are required.")
  }

  let isExisted = await userModel.findOne({ email })

  if (isExisted) {
    throw new ApiError(409, "Email already exists.")
  }

  if (name.trim().length < 3) {
    throw new ApiError(400, "Name must be at least 3 characters long")
  }

  if (password.trim().length < 6) {
    throw new ApiError(400, "Password must be at least 6 characters long")
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new ApiError(400, "Invalid email format")
  }

  //--------Hased user password for make more secure---->>
  const hashedPass = await hashed(password)

  if (!hashedPass) {
    throw new ApiError(404, "Password not hashed.")
  }

  // ---- If validation passes, create the user ---->>
  const newUser = await userModel.create({
    name,
    email,
    passwordHash: hashedPass
  })

  //-------Generate Access token and refresh token--------->>
  let accessTK = await generateAccessToken(newUser._id)
  let refreshTK = await generateRefreshToken(newUser._id)

  //----------hashed refresh token---------->>
  let hashedRefresh = await hashed(refreshTK)

  //-------save refresh token inside DB---------->>
  newUser.refreshTokenHash = hashedRefresh
  await newUser.save()

  return {
    newUser,
    accessTK,
    refreshTK,
  }

}

module.exports = {
  registerService,
}