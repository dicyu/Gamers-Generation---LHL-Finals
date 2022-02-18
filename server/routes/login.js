const router = require("express").Router();
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query("SELECT * FROM gamers")
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
    const { email, password, confirmPassword } = req.body;
    const queParam = [
      email,
      bcrypt.hashSync(password, salt),
      bcrypt.hashSync(confirmPassword, salt),
    ];

    let query =
      "SELECT * FROM gamers WHERE email = $1 AND $2 = $3 AND password = $2;";

    db.query(query, queParam)
      .then((data) => {
        let vd = res.json(data);
        return res.redirect("/");
      })
      .catch((err) => {
        console.log("why", err);
      });
  });
  return router;
};
