const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

var Task = require("./models/task");

export const addDailyTasks = req => {
  var newTask = new Task(req.body);
  console.log(req.body);
  newTask.save();
};
