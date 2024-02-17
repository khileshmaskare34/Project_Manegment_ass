var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/RondomDB")
.then(function(){
  console.log("connected to db");
})

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  project:{
    type: String,
    required: true
  }
})

const User = mongoose.model("USER", userSchema);

module.exports = User;
