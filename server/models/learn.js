const mongoose = require("mongoose");

const learnSchema = new mongoose.Schema({
  item: String,
  date: String,
  listName: String,
  complete: Boolean
});

var Learn = mongoose.model("Learn", learnSchema);

module.exports = Learn;
