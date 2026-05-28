const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

const noteModel = mongoose.model("Notes", noteSchema)

module.exports = noteModel