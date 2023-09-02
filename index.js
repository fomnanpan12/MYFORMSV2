const express = require('express');
const ejs = require("ejs");
const bodyParser = require("body-parser");
const home = require("./home");

const app = express();

//static fiiles
app.use(express.static('public'))
app.use(express.static('files'))

// body paser
app.use(bodyParser.urlencoded({extended: true}));

// template engine
app.set("template engine", "ejs");

// routes
app.use("/", home);
////////////


app.listen(3030);