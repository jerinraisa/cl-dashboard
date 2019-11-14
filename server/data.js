const mongoose = require("mongoose");
const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

// const listRoutes = express.Router();
mongoose.connect("mongodb://127.0.0.1:27018/", {
  user: "cl-dashboard",
  pass: "cl-dashboard",
  useNewUrlParser: true,
  dbName: "cl-dashboard"
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected successfully ");
});

var task = new mongoose.Schema({
  task: String,
  date: Date,
  complete: Boolean
});

var Task = mongoose.model("Daily Tasks", task);

// handleUpdate(){
//   list = list.create().then(newList => return newList)
// }

app.post("/daily-tasks/add-items", req => {
  var newTask = new Task(req.body);
  console.log(req.body);
  newTask.save();
  // list = List.find()
  // var items = list.items.map(item => {
  //   if(item.id == req.id) {
  //     item.completed = true;
  //   }
  // });
  // list.update({items})
});

app.get("/daily-tasks/get-items", (req, res) => {
  res.send(Task);
});

app.post("/daily-tasks/remove-items", (req, res) => {
  console.log("remove item :D");
});

app.listen(PORT, () => console.log("Listening on port", PORT));

// // export the new Schema so we could modify it using Node.js
// module.exports = mongoose.model("Data", DataSchema);
