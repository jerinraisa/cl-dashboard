const Router = require("express").Router;
const evaluation = require("../../controllers/evaluation");
const evalRouter = Router();

evalRouter.post("/submit", evaluation.submit);

module.exports = evalRouter;
