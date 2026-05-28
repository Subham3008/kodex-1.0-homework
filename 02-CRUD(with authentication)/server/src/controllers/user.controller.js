const userModel = require("../models/user.model");
const ApiError = require("../utils/apiError");
const jwt = require("jsonwebtoken")

const registerController = async (req, res) => {
  const { name, email } = req.body

  //----------validation phases---------
  if (!name) {
    throw new ApiError(400, "Name is required.")
  }

  if (!email) {
    throw new ApiError(400, "Email is required.")
  }

  if (name.trim().length < 3) {
    throw new ApiError(400, "Name must be at least 3 characters long")
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //----------create user---------

  const newUser = await userModel.create({
    name,
    email,
  })

  const token = jwt.sign(
    { id: newUser._id },
    process.env.JWT_SECRET, { expiresIn: "1h" });

  res.cookie("token", token)

  return res.status(201).json({
    message: "User registered successfully",
    user: newUser
  });

}

module.exports = {
  registerController,
}