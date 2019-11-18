const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var Task = require("../models/task");

app.use(bodyParser.json());

const removeItem = (req, res) => {
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
};

module.exports = removeItem;
