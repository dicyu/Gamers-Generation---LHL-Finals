const router = require("express").Router();
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const { getToken } = require("../utils/jwt");


module.exports = (db) => {
  router.post("/", (req, res) => {
    
    const loop = req.body;
    let id = req.body.id;

    for (const [key, value] of Object.entries(loop)) {
      if (value && key !== "id" && key !== "password") {
        db.query(`UPDATE gamers SET ${key} = $1 WHERE id = $2;`, [value, id])
          // .then((data) => {
          //   const result = data.rows[0];
          //   const token = getToken(result);

          //   res.json({ token: token, result: result });
          // })
          .catch((err) => {
            console.log(err);
          });
      }
      if(key === "password"){
        let passwordValue = bcrypt.hashSync(value, salt)
        db.query(`UPDATE gamers SET ${key} = $1 WHERE id = $2;`, [passwordValue, id])
        // .then((data) => {
        //   const result = data.rows[0];
        //   const token = getToken(result);

        //   res.json({ token: token, result: result });
        // })
        .catch((err) => {
          console.log(err);
        });
      }
    }
  });
  return router;
};