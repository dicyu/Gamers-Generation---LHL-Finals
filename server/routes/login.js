const router = require("express").Router();
const bcrypt = require("bcrypt");
const e = require("express");
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
      // bcrypt.hashSync(password, salt),
      // bcrypt.hashSync(confirmPassword, salt),
    ];

    let query = "SELECT * FROM gamers WHERE email = $1;";

    db.query(query, queParam)
      .then((data) => {
        if (bcrypt.compareSync(password, data.rows[0].password)) {
          req.session["id"] = data.rows[0].id;
          res.json(data.rows);
        } else {
          res.status(401).send("wrong");
        }
      })
      .catch((err) => {
        console.log("why", err);
      });
  });
  return router;
};
