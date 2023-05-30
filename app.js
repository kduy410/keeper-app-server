import express from "express";
import bodyParser from "body-parser";
import _ from "lodash"
import ejs from "ejs"
import mongoose from "mongoose";
import NoteModel from "./model/note.js";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/keeper-app-server", { useNewUrlParser: true });

app.get("/", (req, res) => {
    NoteModel.find()
        .then((note) => {
            res.send(note);
        })
        .catch(error => {
            console.log(error);
        })
})

app.listen(4000, function () {
    console.log("Server started on port 4000");
});