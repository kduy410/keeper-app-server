import express from "express";
import noteController from "../controllers/notes.controller";
const router = express.Router();

router.get('/allnotes', (req, res) => {
    noteController.getAll(req, res);
});

router.post('/addnote', (req, res) => {
    noteController.addNote(req, res);
});

router.delete('/deletebyname', (req, res) => {
    noteController.deleteNoteByName(req, res);
});

router.delete('/deletebyid', (req, res) => {
    noteController.deleteNoteById(req, res);
});

export default router;