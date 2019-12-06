const mongoose = require("mongoose");

const accSchema = new mongoose.Schema({
  item: String,
  date: String,
  complete: Boolean
});

var Accomplishment = mongoose.model("accomplishments", accSchema);

module.exports = Accomplishment;
