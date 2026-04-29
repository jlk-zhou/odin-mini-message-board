const { messages } = require("../db");

function renderMessagePage(req, res) {
  const message = messages.find(
    (message) => message.id === Number(req.params.messageId),
  );
  res.render("message", {
    title: "Message Detail",
    message: message, 
  });
}

module.exports = { renderMessagePage };
