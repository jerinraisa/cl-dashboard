const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var moment = require("moment");
var Task = require("../models/task");

app.use(bodyParser.json());

const addDailyTasks = req => {
  var newTask = new Task(req.body);
  newTask.date = moment().format("MMM Do YY");
  newTask.save();
};

// app.post("/accomplishments/add-items", req => {
//   var newAccomplish = new Accomplish(req.body);
//   console.log(req.body);
//   newAccomplish.save();
// });

// app.post("/list-learn/add-items", req => {
//   var newLearn = new Learn(req.body);
//   console.log(req.body);
//   newLearn.save();
// });

module.exports = addDailyTasks;
