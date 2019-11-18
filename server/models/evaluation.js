const mongoose = require("mongoose");

const evalSchema = new mongoose.Schema({
  week: String,
  prompt: String,
  score: Number
});

var Eval = mongoose.model("Evaluation", evalSchema);

module.exports = Eval;
