const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 5000;
const db = mongoose.connection;

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

const apiRouter = require("./routes/api");

app.use(apiRouter);

app.listen(PORT, () => console.log("Listening on port", PORT));
