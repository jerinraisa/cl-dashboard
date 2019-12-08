const Router = require("express").Router;
const goals = require("./../../controllers/goals");

const goalsRouter = Router();

goalsRouter.get("/get-goals", goals.get);
goalsRouter.get("/complete", goals.getComplete);
goalsRouter.post("/add-goals", goals.add);
goalsRouter.delete("/remove-goals", goals.remove);
goalsRouter.put("/edit-goals/:id", goals.edit);

module.exports = goalsRouter;
