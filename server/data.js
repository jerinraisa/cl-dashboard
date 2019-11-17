var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27018/", {
  user: "cl-dashboard",
  pass: "cl-dashboard",
  useNewUrlParser: true,
  dbName: "cl-dashboard"
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
});

var list = new mongoose.Schema({
  user: String,
  items: [
    {
      task: String,
      date: Date,
      complete: Boolean
    }
  ]
});

var ToDo = mongoose.model("To Do", list);
var testList = new ToDo({
  user: "Lynn",
  items: [
    {
      task: "Learn Mongo",
      date: Date,
      complete: Boolean
    }
  ]
});
testList.save();

ToDo.findOne({ user: "Lynn" }).then(thing => {
  if (!thing) {
    return new Error("Lynn not found");
  }

  console.log(thing.items);
  return thing;
});

// /backend/data.js

// // export the new Schema so we could modify it using Node.js
// module.exports = mongoose.model("Data", DataSchema);
