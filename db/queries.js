const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages; ");
  return rows;
}

async function findMessageById(id) {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE id = ($1); ",
    [id],
  );
  return rows[0];
}

async function createNewMessage(message) {
  await pool.query(
    "INSERT INTO messages (content, username) VALUES (($1), ($2)); ",
    [message.content, message.username],
  );
}

async function deleteMessage(id) {
  await pool.query("DELETE FROM messages WHERE id = ($1); ", [id]);
}

module.exports = {
  getAllMessages,
  findMessageById,
  createNewMessage,
  deleteMessage,
};
