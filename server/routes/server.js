const mongoose = require("mongoose");
const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const db = mongoose.connection;
const addDT = require("../controllers/addItem").addDailyTasks;
const addLearn = require("../controllers/addItem").addLearn;
const getTasks = require("../controllers/getItems").DT;
const getLearn = require("../controllers/getItems").LL;
const removeDT = require("../controllers/removeItem").removeTask;
const removeLL = require("../controllers/removeItem").removeLearn;
const addScore = require("../controllers/likert");

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

app.get("/daily-tasks/get-items", getTasks);
app.get("/list-learn/get-items", getLearn);

app.post("/daily-tasks/add-items", addDT);
app.post("/list-learn/add-items", addLearn);

app.delete("/daily-tasks/remove-items", removeDT);
app.delete("/list-learn/remove-items", removeLL);

app.post("/submit-evaluation", addScore);

app.listen(PORT, () => console.log("Listening on port", PORT));
