const jwt = require("jsonwebtoken")

let generateAccessToken = async (userId) => {
  return await jwt.sign({ userId }, process.env.JWT_ACCESS_SECRET, { expiresIn: "15m" })
}

let generateRefreshToken = async (userId) => {
  return await jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" })
}

module.exports = {
  generateAccessToken,
  generateRefreshToken
}