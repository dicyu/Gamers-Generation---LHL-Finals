const router = require("express").Router();
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const { getToken } = require("../utils/jwt");

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query("SELECT * FROM gamers;")
      .then((gamers) => {
        return res.json(gamers.rows);
      })
      .catch((err) => {
        return res
          .status(500)
          .send("You cannot access the gamers list,  ", err);
      });
  });

  router.post("/", (req, res) => {
    const { name, gamer_tag, bio, email, password } = req.body;
    const queParam = [name, gamer_tag, bio, email, bcrypt.hashSync(password, salt)];
    let query =
      "INSERT INTO gamers (name, gamer_tag, bio, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *;";
    db.query(query, queParam)
      .then((data) => {
        console.log(">>>>>>>>", data.rows[0])
        const result = data.rows[0];
        const token = getToken(result);
        console.log(">>>>>>>>", token)
        return res.json({ token: token, result: result });
      })
      .catch((err) => {
        return res.status(500).send("Cannot sign up ", err);
      });
  });

  return router;
};
