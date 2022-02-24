const router = require("express").Router();
const bcrypt = require("bcrypt");
const { authorizeUser } = require("../middleware/authorizeUser");
const { decodeTKN } = require("../utils/jwt");

module.exports = (db) => {
  router.get("/", authorizeUser, (req, res) => {
    const queParam = [req.currentUser.gamerID];
    let query = "SELECT * FROM gamers WHERE id = $1;";

    db.query(query, queParam)
      .then((data) => {
        const result = data.rows[0];
        res.json({ result: result, token: req.currentUser.token });
      })
      .catch((err) => {
        return res.status(500).send("You cannot access the gamers list, ", err);
      });
  });
  
  return router;
};

// router.get("/", (req, res) => {
//   const { token } = req.query;
//   const decodedToken = decodeTKN(token)
//   if(!decodedToken){
//     return res.status(401).json({error: "not Authorized - please try again"})
//   }
//   const queParam = [decodedToken.gamerID];
//   let query = "SELECT * FROM gamers WHERE id = $1;";
//   db.query(query, queParam)
//     .then((data) => {
//       const result = data.rows[0];
//       res.json({ result: result, token });
//     })
//     .catch((err) => {
//       return res.status(500).send("You cannot access the gamers list, ", err);
//     });
// });