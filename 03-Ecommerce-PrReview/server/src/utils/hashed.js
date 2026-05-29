const bcrypt = require("bcrypt")

let hashed = async (hashValue) => {
  return await bcrypt.hash(hashValue, 10)
}

let comparePassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword)
}

module.exports = {
  hashed,
  comparePassword,
}