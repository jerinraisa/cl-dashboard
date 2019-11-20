const Router = require("express").Router;
const learn = require("./../../controllers/learn");
const learnRouter = Router();

learnRouter.get("/get-items", learn.get);
learnRouter.post("/add-items", learn.add);
learnRouter.delete("/remove-items", learn.remove);

module.exports = learnRouter;
