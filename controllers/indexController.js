const { messages } = require("../db");

function renderHomePage(req, res) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
}

module.exports = { renderHomePage };
