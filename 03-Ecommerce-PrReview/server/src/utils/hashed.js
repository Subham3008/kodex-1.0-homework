const bcrypt = require("bcrypt")

let hashed = async (hashValue) => {
  return await bcrypt.hash(hashValue, 10)
}

let comparePassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword)
}

module.exports = {
  hashed,
  comparePassword,
}