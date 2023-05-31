import Note from "../models/note";

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const notes = await Note.getAll();
        console.log('sending all notes...');
        res.send(notes);
    }
    catch(err) {
        console.log('Error in getting notes- ' + err);
        res.send('Got error in getAll');
    }
}

controller.addNote = async (req, res) => {
    let NoteToAdd = Note({
        title: req.body.title,
        content: req.body.content,
    });
    try {
        const savedNote = await Note.addNote(NoteToAdd);
        console.log('Adding Note...');
        res.send('added: ' + savedNote);
    }
    catch(err) {
        console.log('Error in getting notes- ' + err);
        res.send('Got error in getAll');
    }
}

controller.deleteNote = async (req, res) => {
    let NoteName = req.body.title;
    try{
        const removedNote = await Note.removeNote(NoteName);
        console.log('Deleted Note- ' + removedNote);
        res.send('Note successfully deleted');
    }
    catch(err) {
        console.log('Failed to delete Note- ' + err);
        res.send('Delete failed..!');
    }
}

export default controller;