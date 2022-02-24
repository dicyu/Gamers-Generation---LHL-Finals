const { authorizeUser } = require("../middleware/authorizeUser");

const router = require("express").Router();

module.exports = (db) => {
  router.post("/", authorizeUser, async (req, res) => {
    const { received_like } = req.body;
    const sent_like = req.currentUser.gamerID;

    try {
      const query1 = `SELECT * FROM likes WHERE sent_like = $1 AND received_like = $2;`;
      const result1 = await db.query(query1, [sent_like, received_like]);
      const likeExists = result1 && result1.rows.length > 0;
      if (likeExists) {
        return res.status(201).json(result1.rows);
      }
      const query2 =
        "INSERT INTO likes (sent_like, received_like) VALUES($1, $2);";
      const result2 = await db.query(query2, [sent_like, received_like]);
      console.log(result2);

      const query3 = `SELECT * FROM likes WHERE sent_like = $2 AND received_like = $1;`;
      const result3 = await db.query(query3, [sent_like, received_like]);

      const shouldCreateMatch = result3 && result3.rows.length > 0;
      if (shouldCreateMatch) {
        const query4 = `INSERT INTO matches (gamer_first_id, gamer_second_id) VALUES($1, $2);`;
        await db.query(query4, [sent_like, received_like]);
      }
      return res.status(201).json({
        message: "successfully liked a user",
        data: result2.rows,
        matchCreated: shouldCreateMatch,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  return router;
};
