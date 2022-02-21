const router = require("express").Router();
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/jwt");

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query("SELECT * FROM gamers")
      .then((gamers) => {
        return res.json(gamers.rows);
      })
      .catch((err) => {
        return res.status(500).send("You cannot access the gamers list, ", err);
      });
  });

  router.post("/", (req, res) => {
    const { email, password } = req.body;
    const queParam = [email];
    let query = "SELECT * FROM gamers WHERE email = $1;";
    db.query(query, queParam)
      .then((data) => {
        if (bcrypt.compareSync(password, data.rows[0].password)) {
          const result = data.rows[0];
          const token = getToken(result);

          res.json({ token: token, result: result });
        } else {
          res.status(401).send("wrong");
        }
      })
      .catch((err) => {
        return res.status(500).send("You cannot access the gamers list, ", err);
      });
  });
  return router;
};
