const router = require("express").Router();
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

module.exports = () => {
  router.post("/", (req, res) => {
    const { email, password, confirmPassword } = req.body;
    const queParam = [email, bcrypt.hashSync(password, salt)];
    let query = "SELECT * FROM gamers WHERE email = $1 AND password = $2;";

    if (
      bcrypt.hashSync(password, salt) === bcrypt.hashSync(confirmPassword, salt)
    ) {
      console.log("Aint nothing but a heartbreak");
      db.query(query, queParam)
        .then((data) => {
          if (!data) {
            console.log("Aint nothing but a mistake");
            res.send("Cannot login, try again");
          } else {
            console.log("Tell me why1", data);
            let sesh = req.session[data.id];
            console.log("Tell me why2", sesh);
            return res.redirect("/", sesh);
          }
        })
        .catch((err) => {
          res.status(500).send("Cannot login, ", err);
        });
    } else {
      return null;
    }
  });
  return router;
};
