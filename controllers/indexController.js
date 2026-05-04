const db = require("../db/queries"); 

async function renderHomePage(req, res) {
  const messages = await db.getAllMessages(); 
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
}

module.exports = { renderHomePage };
