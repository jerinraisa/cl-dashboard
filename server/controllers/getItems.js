const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var Task = require("../models/task").Task;
var Learn = require("../models/task").Learn;

app.use(bodyParser.json());

const DT = (req, res) => {
  Task.find({ complete: false }, (err, tasks) => {
    res.json(tasks);
  });
};

const LL = (req, res) => {
  Learn.find({ complete: false }, (err, tasks) => {
    res.json(tasks);
  });
};
module.exports = { DT, LL };
