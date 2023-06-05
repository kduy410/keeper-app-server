import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
});

const NotesModel = mongoose.model('Note', noteSchema);

NotesModel.getAll = () => {
    return NotesModel.find({});
}

NotesModel.addNote = (note) => {
    return note.save();
}

NotesModel.removeNoteById = (id) => {
    return NotesModel.deleteOne({ _id: id }); // it is mongoose function deleteOne(), can't use mongodb function such as remove()
}

NotesModel.removeNoteByName = (name) => {
    return NotesModel.remove({ title: name });
}

export default NotesModel;