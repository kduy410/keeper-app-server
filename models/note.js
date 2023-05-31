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

NotesModel.removeNote = (name) => {
    return NotesModel.remove({title: name});
}

export default NotesModel;