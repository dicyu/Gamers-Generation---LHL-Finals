const router = require("express").Router();
const bcrypt = require("bcrypt");
const { decodeTKN } = require("../utils/jwt");

module.exports = (db) => {

  router.get("/", (req, res) => {
    const { token } = req.header;
    console.log(req.header, req.body, req.params)
    console.log("I'm going to die", token)
    const decodedToken = decodeTKN(token)
    if(!decodedToken){
      return res.status(401).json({error: "not Authorized - please try again"})
    }
    const queParam = [decodedToken.gamerID];
    let query = "SELECT * FROM gamers WHERE id = $1;";
    db.query(query, queParam)
      .then((data) => {
        const result = data.rows[0];
        res.json({ result: result });
      })
      .catch((err) => {
        return res.status(500).send("You cannot access the gamers list, ", err);
      });
  });
  return router;
};
