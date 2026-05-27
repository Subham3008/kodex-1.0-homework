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

module.exports = {
  createNoteController
}