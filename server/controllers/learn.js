var moment = require("moment");
var errorMessage = require("./../helpers/response").errorMessage;
var Learn = require("../models/learn");

const get = (req, res) => {
  return Learn.find({ complete: false })
    .then(tasks => res.json(tasks))
    .catch(error => res.json(errorMessage()));
};

const add = (req, res) => {
  var newLearn = new Learn(req.body);
  newLearn.date = moment().format();
  newLearn.save();
};

const remove = (req, res) => {
  console.log(req.body);
  return Learn.deleteOne({ _id: req.body._id })
    .exec()
    .then(deleted =>
      res.json({
        message: "Task deleted successfully"
      })
    )
    .catch(error => res.status(500).json(errorMessage("Error deleting Task")));
};

module.exports = {
  add,
  get,
  remove
};
