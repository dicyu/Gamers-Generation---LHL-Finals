const router = require("express").Router();

/* GET home page. */

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = "SELECT * FROM gamers;";

    db.query(query)
      .then((data) => {
        return res.status(200).json(data.rows);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  });
  return router;
};
