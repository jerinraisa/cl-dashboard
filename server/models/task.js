const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  item: String,
  date: String,
  complete: Boolean
});

var Task = mongoose.model("Tasks", taskSchema);

module.exports = Task;
