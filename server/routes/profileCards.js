const { authorizeUser } = require("../middleware/authorizeUser");
const router = require("express").Router();

module.exports = (db) => {
  router.get("/", authorizeUser, (req, res) => {
    const queParam = req.currentUser.gamerID;
    let query = "SELECT * FROM gamers WHERE id != $1;";

    db.query(query, [queParam])
      .then((data) => {
        const result = data.rows;
        res.json({ result: result, token: req.currentUser.token });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  });
  return router;
};
