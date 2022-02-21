const router = require("express").Router();
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

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
    const { name, gamer_tag, email, bio, password } = req.body;
    const queParam = [name, gamer_tag, email, bio, bcrypt.hashSync(password, salt)];
    let id;
    let query =
      "INSERT INTO gamers (name, gamer_tag, email, bio, password) VALUES ($1, $2, $3, $4, $5) RETURNING *;";
    return db
      .query(query, queParam)
      .then((data) => {
        console.log(data.rows)
        const user = data.rows[0];
        req.session["id"] = user.id;
        console.log("Hello, ", user.id)
        return res.json({ user });
      })
      .catch((err) => {
        res.status(500).send("Cannot sign up ", err);
      });
  });

  return router;
};
