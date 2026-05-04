const db = require("../db/queries"); 

async function deleteMessage(req, res) {
  const id = Number(req.params.messageId); 
  await db.deleteMessage(id); 
  res.redirect("/"); 
}

module.exports = { deleteMessage }; 