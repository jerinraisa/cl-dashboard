const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  item: String,
  date: Date,
  complete: Boolean
});

module.exports = mongoose.model("Daily Tasks", taskSchema);
