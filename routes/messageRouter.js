const { Router } = require("express"); 
const path = require("node:path"); 
const { renderMessagePage } = require("../controllers/messageController"); 

const messageRouter = Router(); 

messageRouter.get("/message/:messageId", renderMessagePage);  

module.exports = messageRouter; 