const express = require("express");

var Home = express();

Home.get("/", (req,res) => {
    res.send("hello")
});

// var Home = home;

module.exports = Home;