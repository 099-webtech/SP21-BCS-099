const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/UserData')
    .then(() => {
        console.log('success');
    }).catch(() => {
        console.log('something wrong');
    });
    const User = require('./model/user');




// Set the view engine to render HTML
app.set("view engine", "html");

app.get("/", (req, res) => {
    res.render("contactus");
});

app.listen(port, () => {
    console.log(`App listening to port ${port}`);
});
