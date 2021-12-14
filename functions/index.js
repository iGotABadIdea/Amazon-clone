require("dotenv").config();

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIP_PRIVATE_KEY);

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res)=> res.status(200).send("hello World "));

exports.api = functions.https.onRequest(app);
