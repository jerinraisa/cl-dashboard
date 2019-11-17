const mongoose = require("mongoose");
const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const db = mongoose.connection;

app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27018/", {
  user: "cl-dashboard",
  pass: "cl-dashboard",
  useNewUrlParser: true,
  dbName: "cl-dashboard"
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected successfully ");
});

var Task = require("./models/task");
// var Learn = mongoose.model("Things I learnt", taskSchema);
// var Accomplish = mongoose.model("Accomplishments", taskSchema);

app.get("/daily-tasks/get-items", (req, res) => {
  db.collection("daily tasks").find({}, (err, tasks) => {
    var tasksMap = {};
    tasks.forEach(element => {
      tasksMap[element._id] = element;
    });
  });

  // res.send(idk);
});

// handleUpdate(){
//   list = list.create().then(newList => return newList)
// }

// app.post("/accomplishments/add-items", req => {
//   var newAccomplish = new Accomplish(req.body);
//   console.log(req.body);
//   newAccomplish.save();
// });

// app.post("/list-learn/add-items", req => {
//   var newLearn = new Learn(req.body);
//   console.log(req.body);
//   newLearn.save();
// });

app.post("/daily-tasks/add-items", req => {
  var newTask = new Task(req.body);
  console.log(req.body);
  newTask.save();
});

app.post("/daily-tasks/remove-items", (req, res) => {
  console.log(req.body.name);
  // find the item to be removed within daily tasks
  var prevList = db.collection("daily tasks").find({});
  // console.log(prevList);
  // prevList.map(thing => {
  //   if (thing.item !== req.body.name) {
  //     console.log(thing.item);
  //   }
  // update the list in mongo with tempList
  // });
  // remap all of the items without including the one to be removed
  // list = List.find()
  // var items = list.items.map(item => {
  //   if(item.id == req.id) {
  //     item.completed = true;
  //   }
  // });
  // list.update({items})
});

app.listen(PORT, () => console.log("Listening on port", PORT));

// // export the new Schema so we could modify it using Node.js
// module.exports = mongoose.model("Data", DataSchema);
