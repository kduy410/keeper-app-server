import express from "express";
import noteController from "../controllers/notes.controller.js";
const router = express.Router();

router.get('/allnotes', (req, res) => {
    noteController.getAll(req, res);
});

router.post('/addnote', (req, res) => {
    noteController.addNote(req, res);
});

router.delete('/deletebyname/:name', (req, res) => {
    noteController.deleteNoteByName(req, res);
});

router.delete('/deletebyid/:id', (req, res) => {
    noteController.deleteNoteById(req, res);
});

export default router;