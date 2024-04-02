const noteShema = require("../models/noteSchema");

const createNote = async (req, res) => {
  const { note, color } = req.body;

  const notes = new noteShema({
    note: note,
    color:color
  
  });

  await notes.save();

  res.status(200).json({
    message: "Successfully notes added",
    status: "success",
    data: notes,
  });
};
 
const getNotes = async (req, res) => {
  const notes = await noteShema.find();
  res.status(200).json({
    message: "Successfully got notes",
    status: "success",
    data: notes,
  });
};

const deleteNotes = async (req, res) => {
  const deleteData = await noteShema.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "Successfully deleted notes data",
    status: "success",
    data: deleteData,
  });
};

const updatenote = async (req, res) => {
  const updatedNote = await noteShema.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({
    message: "Successfully updated note data",
    status: "success",
    data: updatedNote,
  });
};


module.exports = {
  createNote,
  getNotes,
  deleteNotes,
  updatenote
};
