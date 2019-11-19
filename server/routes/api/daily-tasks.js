const Router = require("express").Router;
const dailyTasks = require("./../../controllers/daily-tasks");

const tasksRouter = Router();

tasksRouter.get("/get-items", dailyTasks.get);
tasksRouter.post("/add-items", dailyTasks.add);
tasksRouter.delete("/remove-items", dailyTasks.remove);

module.exports = tasksRouter;
