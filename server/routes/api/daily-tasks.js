const Router = require("express").Router;
const dailyTasks = require("./../../controllers/daily-tasks");

const tasksRouter = Router();

tasksRouter.get("/get-items", dailyTasks.get);
tasksRouter.get("/get-archive", dailyTasks.getArchive);
tasksRouter.post("/add-items", dailyTasks.add);
tasksRouter.delete("/remove-items", dailyTasks.remove);
tasksRouter.post("/set-date", dailyTasks.setFilter);

module.exports = tasksRouter;
