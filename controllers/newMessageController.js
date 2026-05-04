const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const validateMessage = [
  body("content")
    .trim()
    .isLength({ min: 1, max: 140 })
    .withMessage(`Your message must be between 1 and 140 characters.`),
  body("username")
    .trim()
    .isLength({ min: 1, max: 30 })
    .withMessage(`Your username must be between 1 and 30 characters.`),
];

function renderNewMessagePage(req, res) {
  res.render("new");
}

const postNewMessage = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("new", { errors: errors.array() });
    }

    const { content, username } = matchedData(req);
    await db.createNewMessage({ content, username });
    res.redirect("/");
  },
];

module.exports = { renderNewMessagePage, postNewMessage };
