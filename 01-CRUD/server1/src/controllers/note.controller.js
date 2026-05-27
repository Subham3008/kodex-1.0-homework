const noteModel = require("../models/note.model")


const createNoteController = async (req, res) => {
  try {
    const { title, description } = req.body

    if (!title) {
      return res.status(401).json({
        message: "title is required."
      })
    }

    if (!description) {
      return res.status(400).json({
        message: "description is required."
      })
    }

    if (title.trim().length < 3) {
      return res.status(400).json({
        message: "title must be 3 characters long."
      })
    }

    if (description.trim().length < 10) {
      return res.status(400).json({
        message: "description must be 10 characters long."
      })
    }

    const newNotes = await noteModel.create({
      title,
      description,
    })

    return res.status(201).json({
      message: "Note created successfully."
    })


  } catch (err) {
    res.status(500).json({
      message: "Internal server error."
    })
  }
}

//fetched all notes
const getNotesController = async (req, res) => {
  try {
    const notes = await noteModel.find()

    return res.status(200).json({
      message: "Notes fetched successfully.",
      data: notes,
    })

  } catch (err) {
    return res.status(500).json({
      message: "Internal server error."
    })
  }
}

//update controller
const updateNoteController = async (req, res) => {
  try {
    const { id } = req.params
    const { description } = req.body

    if (!description) {
      return res.status(400).json({
        message: "description is required."
      })
    }

    if (description.trim().length < 10) {
      return res.status(400).json({
        message: "description must be 10 characters long."
      })
    }

    const note = await noteModel.findById(id)

    if (!note) {
      return res.status(404).json({
        message: "Note not found."
      })
    }

    note.description = description
    await note.save()

    return res.status(200).json({
      message: "Note updated successfully."
    })


  } catch (err) {
    return res.status(500).json({
      message: "Internal server error."
    })
  }
}

//delete controller
const deleteNoteController = async (req, res) => {
  try {

    const { id } = req.params

    const note = await noteModel.findByIdAndDelete(id)

    if (!note) {
      return res.status(404).json({
        message: "Note not found."
      })
    }

    return res.status(200).json({
      message: "Note deleted successfully.",
      deletedNote: note,
    })


  } catch (err) {
    return res.status(500).json({
      message: "Internal server error."
    })
  }
}

module.exports = {
  createNoteController,
  getNotesController,
  updateNoteController,
  deleteNoteController,
}