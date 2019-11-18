const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  item: String,
  date: String,
  listName: String,
  complete: Boolean
});

var Task = mongoose.model("Daily Tasks", taskSchema);
var Learn = mongoose.model("Things I learnt", taskSchema);

// var Learn = mongoose.model("things i learnt", taskSchema);

module.exports = { Task, Learn };
