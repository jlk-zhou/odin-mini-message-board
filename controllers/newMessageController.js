const db = require("../db/queries"); 

function renderNewMessagePage(req, res) {
  res.render("new");
}

async function postNewMessage(req, res) {
  const message = req.body; 
  await db.createNewMessage(message); 
  res.redirect("/");
}

module.exports = { renderNewMessagePage, postNewMessage };
