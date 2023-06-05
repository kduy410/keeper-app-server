import Note from "../models/note.js";

const controller = {};

controller.getAll = async (req, res) => {
    Note.getAll()
        .then(result => {
            console.log('Sending all notes...');
            console.log('getAll: ' + JSON.stringify(result))
            res.setHeader('Content-Type', 'application/json');
            res.send(result);
            // res.status(200).json(result))
        })
        .catch(e => {
            console.log('Error in getting notes!');
            console.log(e);
            res.send([]);
        })
}

controller.addNote = async (req, res) => {
    let NoteToAdd = Note({
        title: req.body.title,
        content: req.body.content,
    });
    try {
        Note.addNote(NoteToAdd)
            .then(result => {
                console.log('Adding Note...');
                console.log(result);
                res.setHeader('Content-Type', 'application/json');
                res.send(result);
            })

    }
    catch (err) {
        console.log('Error in getting notes- ' + err);
        res.send('Got error in getAll');
    }
}

controller.deleteNoteByName = async (req, res) => {
    let name = req.body.title;
    try {
        const removedNote = await Note.removeNoteByName(name);
        console.log('Deleted Note- ' + removedNote);
        res.send('Note successfully deleted');
    }
    catch (err) {
        console.log('Failed to delete Note- ' + err);
        res.send('Delete failed..!');
    }
}

controller.deleteNoteById = async (req, res) => {
    Note.removeNoteById(req.params.id)
        .then(result => {
            console.log('delete: ' + req.params.id)
            res.setHeader('Content-Type', 'application/json');
            res.send(result);
        })
        .catch(e => {
            console.log('Error in getting notes!');
            console.log(e);
            next(e);
        })
}

export default controller;