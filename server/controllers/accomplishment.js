var moment = require("moment");
var errorMessage = require("./../helpers/response").errorMessage;
var Accomplishment = require("../models/accomplishment");

const get = (req, res) => {
  return Accomplishment.find({ complete: false })
    .then(tasks => res.json(tasks))
    .catch(error => res.json(errorMessage()));
};

const add = (req, res) => {
  var newAccomplishment = new Accomplishment(req.body);
  newAccomplishment.date = moment().format();
  newAccomplishment.save();
};

const remove = (req, res) => {
  console.log(req.body);
  return Accomplishment.deleteOne({ _id: req.body._id })
    .exec()
    .then(deleted =>
      res.json({
        message: "Accomplishment deleted successfully"
      })
    )
    .catch(error =>
      res.status(500).json(errorMessage("Error deleting Accomplishment"))
    );
};

module.exports = {
  add,
  get,
  remove
};
