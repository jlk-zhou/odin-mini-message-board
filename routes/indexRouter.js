const { Router } = require("express");
const path = require("node:path");
const { renderHomePage } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", renderHomePage);

module.exports = indexRouter;
