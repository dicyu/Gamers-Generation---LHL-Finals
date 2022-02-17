const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query =
      "SELECT gamers.gamer_tag, friend_id FROM friends_list JOIN gamers ON gamer_id = gamers.id WHERE friends_list.gamer_id = 7;";

    db.query(query)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.post("/", (req, res) => {
    const { gamersID, friendID } = req.body;
    const queParam = [gamersID, friendID];
    let query =
      "INSERT INTO friends_list (gamer_id, friend_id) VALUES ($1, $2)";
    db.query(query, queParam)
      .then((data) => {
        const friend = data.rows;
        return res.json({ friend });
      })
      .catch(() => {
        return res
          .status(500)
          .send("You cannot add friends right now, sorry D: ", err);
      });
  });

  return router;
};
