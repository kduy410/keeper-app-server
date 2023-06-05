import 'dotenv/config'
import express from "express";
import bodyParser from "body-parser";
import _ from "lodash"
import ejs from "ejs"
import mongoose from "mongoose";
import config from "./core/config/config.dev.js"
import connect from "./db/connect.js"
import notes from "./routes/notes.route.js";
import cors from "cors"
const PORT = config.SERVER_PORT;

connect();

const app = express();

app.set('view engine', 'ejs');

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/notes', notes);

app.get("/", (req, res) => {
    res.send("Invalid endpoint!")
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});