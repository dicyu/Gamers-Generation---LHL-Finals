const router = require("express").Router();

/* GET home page. */

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query =
      "SELECT * FROM likes WHERE sent = [$1, $2] AND received = [$2, $1];";

    db.query(query)
      .then((data) => {
        return res.json(data.rows);
      })
      .catch((err) => {
        return res.json(err);
      });
  });

  router.post("/", (req, res) => {
    let query =
      "INSERT INTO match (gamer_first_id, gamer_second_id) VALUES($1, $2);";

    db.query(query)
      .then((data) => {
        return res.json(data.rows);
      })
      .catch((err) => {
        return res.json(err);
      });
  });
  return router;
};
