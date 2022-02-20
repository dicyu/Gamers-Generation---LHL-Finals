const router = require("express").Router();
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

module.exports = (db) => {
  router.post("/", (req, res) => {
    const loop = req.body;
    let id = req.session.id

    for (const [key, value] of Object.entries(loop)) {
      if (value) {
        db.query(`UPDATE gamers SET ${key} = $1 WHERE id = $2;`, [
          value,
          id,
        ])
          .then(() => {console.log("Success")})
          .catch((err) => {
            console.log(err);
          });
      }
    }
  });
  return router;
};