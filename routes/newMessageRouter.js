const { Router } = require("express"); 
const path = require("node:path"); 
const { renderNewMessagePage } = require("../controllers/newMessageController"); 
const { postNewMessage } = require("../controllers/newMessageController"); 

const newMessageRouter = Router(); 

newMessageRouter.get("/new", renderNewMessagePage);
newMessageRouter.post("/new", postNewMessage); 

module.exports = newMessageRouter; 