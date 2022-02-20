const router = require("express").Router();

/* GET home page. */

module.exports = (db) => {
  router.post("/", (req, res) => {
    const { sent_like, received_like } = req.body;

    let query = "INSERT INTO likes (sent_like, received_like) VALUES($1, $2);";

    return db
      .query(query, [sent_like, received_like])
      .then((data) => {
        return res.status(201).json(data.rows);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  });
  return router;
};
