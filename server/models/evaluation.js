const mongoose = require("mongoose");

const evalSchema = new mongoose.Schema({
  week: String,
  results: [{ prompt: String, score: Number }]
});

var Eval = mongoose.model("Daily Tasks", evalSchema);

module.exports = Eval;
