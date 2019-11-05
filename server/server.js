// const express = require("express");
// const app = express();
// const port = process.env.PORT || 5000;

// // console.log that server is running
// app.listen(port, () => console.log(`Listening on port ${port}`));

// app.get("/express_backend", (req, res) => {
//   res.send({ express: "Backend is connected to react" });
// });
// // create a get route
// app.get("/", (req, res) => {
//   res.send({ express: "Hi" });
// });

// create a GET route

const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
mongoose.connect("mongodb://127.0.0.1:27018/", {
  user: "cl-dashboard",
  pass: "cl-dashboard",
  useNewUrlParser: true,
  dbName: "cl-dashboard"
});

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(logger("dev"));

var dogSchema = new mongoose.Schema({
  name: String,
  height: Number
});

var Dog = mongoose.model("Dog", dogSchema);

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  Dog.findOne({ name: "Pepper" }).then(dog => {
    if (!dog) {
      return new Error("Dog not found");
    }

    console.log(dog.name);

    return res.json(dog);
  });

  // Data.find((err, data) => {
  //   if (err) return res.json({ success: false, error: err });
  //   return res.json({ success: true, data: data });
  // });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
