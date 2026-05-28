const userModel = require("../models/user.model")
const ApiError = require("../utils/apiError")
const jwt = require("jsonwebtoken")

//----------create user middleware for authorized validate user--------------
const verifyJwt = async (req, res, next) => {
  try {

    //----take token from req.cookies-------------
    const { token } = req.cookies

    if (!token) {
      throw new ApiError(401, "Token not found.")
    }


    //----------decode token for find user id----------
    const decode = jwt.verify(token, process.env.JWT_SECRET)


    if (!decode) {
      throw new ApiError(401, "Unauthorized access.")
    }

    //--------find user using decode.id-------
    const user = await userModel.findById(decode.id)

    if (!user) {
      throw new ApiError(404, "User not found.")
    }

    req.user = user

    //-------forward next pipeline using next()----------
    next()

  } catch (error) {

    next(
      new ApiError(
        401,
        error.message || "Invalid token"
      )
    )

  }
}

module.exports = verifyJwt