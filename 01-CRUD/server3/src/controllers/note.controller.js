const noteModel = require("../models/note.model")
const ApiError = require("../utils/apiError")


const createNoteController = async (req, res) => {
  const { title, description } = req.body

  if (!title) {
    throw new ApiError(400, "title is required.")
  }

  if (!description) {
    throw new ApiError(400, "description is required.")
  }

  if (title.trim().length < 3) {
    throw new ApiError(400, "title must be 3 characters long.")
  }

  if (description.trim().length < 10) {
    throw new ApiError(400, "description must be 10 characters long.")
  }

  const newNotes = await noteModel.create({
    title,
    description,
  })

  return res.status(201).json({
    message: "Note created successfully."
  })
}