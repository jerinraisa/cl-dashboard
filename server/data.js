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
  console.log("get");
  Task.find({ complete: false }, (err, tasks) => {
    res.json(tasks);
  });
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

app.delete("/daily-tasks/remove-items", (req, res) => {
  console.log(req.body);
  return Task.deleteOne({ _id: req.body._id })
    .exec()
    .then(deleted =>
      res.json({
        message: "Task deleted successfully"
      })
    )
    .catch(error =>
      res.status(500).json({
        message: "Error deleting Task"
      })
    );
});

// find the item to be removed within daily tasks

// prev.map(thing => {
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

app.listen(PORT, () => console.log("Listening on port", PORT));
