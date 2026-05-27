const noteModel = require("../models/note.model")
const ApiError = require("../utils/apiError")

//create notes
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

//fetched all notes
const getNotesController = async (req, res) => {
  const notes = await noteModel.find()

  if (!notes) {
    throw new ApiError(404, "Notes not found")
  }

  return res.status(200).json({
    message: "Notes fetched successfully.",
    data: notes,
  })

}

module.exports={
  createNoteController,
  getNotesController,

}