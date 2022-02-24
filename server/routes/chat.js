const router = require("express").Router();
const { authorizeUser } = require("../middleware/authorizeUser");

module.exports = (db) => {
  // add chats
  router.post("/", async (req, res) => {
    const { conversation_id, sender_id, receiver_id, chat } = req.body;
    const queParam = [conversation_id, sender_id, receiver_id, chat];
    let query =
      "INSERT INTO chats (conversation_id, sender_id, receiver_id, chat) VALUES ($1, $2, $3, $4) RETURNING *;";

    db.query(query, queParam)
      .then((data) => {
        const savedMessage = data.rows[0];
        res.status(200).json(savedMessage);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  // get chats
  router.get("/", authorizeUser, async (req, res) => {
    const queParam = [req.currentUser.gamerID];

    let query = "SELECT * FROM chats WHERE sender_id = $1 OR receiver_id = $1";

    db.query(query, queParam)
      .then((data) => {
        const messages = data.rows;
        res.status(200).json(messages);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  return router;
};

// (receiver_id = $1 OR receiver_id = $2)
