const { messages } = require("../db");

function renderNewMessagePage(req, res) {
  res.render("new");
}

function postNewMessage(req, res) {
  messages.push({
    id: messages.length, 
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
}

module.exports = { renderNewMessagePage, postNewMessage };
