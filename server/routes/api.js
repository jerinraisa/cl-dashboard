const Router = require("express").Router;
const bodyParser = require("body-parser");

const tasksRouter = require("./api/daily-tasks");
const learnRouter = require("./api/list-learn");
const accRouter = require("./api/accomplishment");
const evalRouter = require("./api/evaluation");
// const addScore = require("./controllers/likert");
const apiRouter = Router();

apiRouter.use(bodyParser.json());

apiRouter.use("/daily-tasks", tasksRouter);
apiRouter.use("/list-learn", learnRouter);
apiRouter.use("/accomplishments", accRouter);
apiRouter.use("/evaluation", evalRouter);
// apiRouter.post("/submit-evaluation", addScore);

module.exports = apiRouter;
