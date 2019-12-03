const mongoose = require("mongoose");

const evalSchema = new mongoose.Schema({
  week: String,
  scores: Array
});

var Eval = mongoose.model("Evaluation", evalSchema);

module.exports = Eval;
