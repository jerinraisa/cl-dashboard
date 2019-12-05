const Router = require("express").Router;
const goals = require("./../../controllers/goals");

const goalsRouter = Router();

goalsRouter.get("/get-goals", goals.get);
goalsRouter.post("/add-goals", goals.add);
goalsRouter.delete("/remove-goals", goals.remove);

module.exports = goalsRouter;
