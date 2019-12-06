const Router = require("express").Router;
const accomplishment = require("./../../controllers/accomplishment");
const accRouter = Router();

accRouter.get("/get-items", accomplishment.get);
accRouter.post("/add-items", accomplishment.add);
accRouter.delete("/remove-items", accomplishment.remove);

module.exports = accRouter;
