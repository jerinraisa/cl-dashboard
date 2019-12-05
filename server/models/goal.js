const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  goal: String,
  date: String,
  complete: Boolean
});

var Goal = mongoose.model("Goals", goalSchema);

module.exports = Goal;
