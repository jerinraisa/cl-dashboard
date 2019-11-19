const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var Eval = require("../models/evaluation");

app.use(bodyParser.json());

const addScore = req => {
  console.log(req.body);

  // if value already exists for the week, update the existing form
  var newEval = new Eval(req.body);
  newEval.save();
};

module.exports = addScore;
