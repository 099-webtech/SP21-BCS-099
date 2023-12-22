// models/Mydata.js
const mongoose = require('mongoose');

const mydataSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Age: {
    type: Number,
    required: true
  }
});

const Mydata = mongoose.model('Mydata', mydataSchema); // Set the model name to 'Mydata'

module.exports = Mydata;
