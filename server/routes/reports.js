const router = require("express").Router();

/* GET home page. */

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = "SELECT * FROM reports;";

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
