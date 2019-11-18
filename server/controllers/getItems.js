const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var Task = require("../models/task");

app.use(bodyParser.json());

const getItems = (req, res) => {
  Task.find({ complete: false }, (err, tasks) => {
    res.json(tasks);
  });
};
module.exports = getItems;
