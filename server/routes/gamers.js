const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query("SELECT * FROM gamers")
      .then((gamers) => {
        res.json(gamers.rows);
      })
      .catch((err) => {
        res.status(500).send("You cannot access the gamers list,  ", err);
      });
  });

  router.post("/", (req, res) => {
    const { name, gamer_tag, avatar, bio, email, password } = req.body;
    const queParam = [name, gamer_tag, avatar, bio, email, password];
    let query =
      "INSERT INTO gamers (name, gamer_tag, avatar, bio, email, password) VALUES ($1, $2, $3, $4, $5, $6)";
    db.query(query, queParam)
      .then((data) => {
        const user = data.rows;
        res.json({ user });
      })
      .catch((err) => {
        res.status(500).send("Cannot sign up ", err);
      });
  });

  return router;
};
