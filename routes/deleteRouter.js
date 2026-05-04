const { Router } = require("express"); 
const { deleteMessage } = require("../controllers/deleteController"); 

const deleteRouter = Router(); 

deleteRouter.get("/delete/:messageId", deleteMessage); 

module.exports = deleteRouter; 