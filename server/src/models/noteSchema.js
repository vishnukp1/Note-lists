const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
  note: {
    type: String,
    required: false,
  },
color:{
  type:String
}
});

const noteModel = mongoose.model("note", noteSchema)

module.exports = noteModel