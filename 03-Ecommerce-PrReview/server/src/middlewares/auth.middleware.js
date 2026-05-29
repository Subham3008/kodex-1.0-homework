const jwt = require("jsonwebtoken")
const ApiError = require("../utils/apiError")
const userModel = require("../models/user.model")

//---------this middleware is to check authorized user or not---------->>
const verifyJwt = async (req, res, next) => {

  //-------take access token from  req.cookies------------>>
  const token = req.cookies?.accessToken

  if (!token) {
    throw new ApiError(401, "Unauthorized access.")
  }

  //---------verify access token------>>
  const decode = jwt.verify(token, process.env.JWT_ACCESS_SECRET)

  if (!decode) {
    throw new ApiError(401, "Unauthorized access.")
  }

  //--------find user from Database using decode.userId--------->>
  const user = await userModel.findById(decode.userId).select("-passwordHash -refreshTokenHash")

  if (!user) {
    throw new ApiError(404, "User not found.")
  }

  req.user = user
  //-----------if all validation passs then forward next pipeline-->>
  next()
}

module.exports = verifyJwt