const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  item: String,
  list: String,
  date: Date,
  complete: Boolean
});

module.exports = mongoose.model("Daily Tasks", taskSchema);
