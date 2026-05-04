const db = require("../db/queries");

async function renderMessagePage(req, res) {
  const id = Number(req.params.messageId); 
  const message = await db.findMessageById(id);
  res.render("message", {
    title: "Message Detail",
    message: message,
  });
}

module.exports = { renderMessagePage };
