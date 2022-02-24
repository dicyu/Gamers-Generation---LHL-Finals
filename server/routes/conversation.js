const { authorizeUser } = require("../middleware/authorizeUser");

const router = require("express").Router();

module.exports = (db) => {
  // new convo
  router.post("/", async (req, res) => {
    try {
      let query1 = "SELECT * FROM matches;";
      let result1 = await db.query(query1);
      console.log(result1);

      const convoExists = result1 && result1.rows.length > 0;
      if (convoExists) {
        return res.status(201).json(result1.rows);
      }
      const query2 =
        "INSERT INTO conversations (gamer_1_id, gamer_2_id) VALUES($1, $2);";
      const result2 = await db.query(query2, [gamer_1_id, gamer_2_id]);
      console.log("result222222222222222", result2);

      return res.status(201).json({
        message: "successfully created convo",
        data: result2.rows,
      });
    } catch (err) {
      return res.status(500).send("Conversation err, ", err);
    }
  });

  // get convo of a user

  router.get("/", authorizeUser, async (req, res) => {
    let queParam = [req.currentUser.gamerID];

    let query =
      "SELECT * FROM conversations WHERE gamer_1_id = $1 OR gamer_2_id = $1;";

    db.query(query, queParam)
      .then((data) => {
        const result = data.rows;
        res.json({ result: result, token: req.currentUser.token });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  return router;
};

// router.get("/", authorizeUser, (req, res) => {
//   let id = req.currentUser.gamerID;
//   try {
//     const conversation = Conversation.find({
//       // check the users array
//       users: { $in: [req.params.gamerID] },
//     });
//     res.status(200).json(conversation);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
