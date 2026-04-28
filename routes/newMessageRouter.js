const { Router } = require("express"); 
const path = require("node:path"); 
const { renderNewMessagePage } = require("../controllers/newMessageController"); 

const newMessageRouter = Router(); 

newMessageRouter.get("/new", renderNewMessagePage); 

module.exports = newMessageRouter; 