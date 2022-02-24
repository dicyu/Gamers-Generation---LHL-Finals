const { authorizeUser } = require("../middleware/authorizeUser");
const router = require("express").Router();

module.exports = (db) => {
  router.get("/", authorizeUser, async (req, res) => {
    let id = req.currentUser.gamerID;
    let query =
      "SELECT gamers.id AS gamers_id, gamers.*, matches.id AS match_id, matches.* FROM gamers JOIN matches ON gamers.id = gamer_second_id WHERE gamer_first_id = $1 OR gamer_second_id = $1;";

    // "SELECT gamers.* FROM gamers JOIN matches ON gamer_first_id = gamers.id WHERE gamer_first_id = $1 OR gamer_second_id = $1;";
    // let query =
    //   "SELECT * FROM matches WHERE gamer_first_id = $1 OR gamer_second_id = $1;";

    // SELECT * FROM gamers JOIN matches ON gamer_first_id = gamers(id) WHERE gamer_first_id = $1 OR gamer_second_id = $1;

    db.query(query, [id])
      .then((data) => {
        // console.log("This data is from match route: ", data);
        // const currentMatches = data.rows[0];
        // let query =
        //   "SELECT * FROM gamers JOIN matches ON gamer_first_id = gamers(id) WHERE gamer_first_id = $1 OR gamer_second_id = $1;";
        // console.log(
        //   "Witches have Liches",
        //   currentMatches.gamer_first_id,
        //   currentMatches.gamer_second_id
        // );
        // const queParam = [
        //   currentMatches.gamer_first_id,
        //   currentMatches.gamer_second_id,
        // ];
        // expected output = [{}, {}]
        console.log("Truckers Banned from Ottawa", data.rows);
        res.status(200).json(data.rows);
        // .then((data) => {
        // })
        // .catch((err) => {
        //   res.status(500).json(err);
        // });
      })
      // db.query(query, [id])
      .catch((err) => {
        console.log("Only you can prevent wild fires", err);
        res.status(500).json(err);
      });

    // try {
    //   await db.query(query1, id).then((data) => {
    //     // const gamer_first_id = data.rows.gamer_first_id;
    //     // const gamer_second_id = data.rows.gamer_second_id;
    //   });

    //   let query2 = `SELECT * FROM gamers WHERE id = ${gamer_first_id} OR id = ${gamer_second_id};`;
    //   let result2 = await db.query(query2);

    //   return res.status(201).json({
    //     message: "getting two users who are matched",
    //     data: result2.rows,
    //   });
    // } catch (err) {
    //   return res.status(500).json({ message: "Conversation err, ", err });
    // }
  });

  return router;
};

/* logic 
if two users matched, it should create the new conversation table and we should get the conversations
*/

// router.post("/", (req, res) => {
//   let query =
//     "INSERT INTO match (gamer_first_id, gamer_second_id) VALUES($1, $2);";

//   db.query(query)
//     .then((data) => {
//       return res.json(data.rows);
//     })
//     .catch((err) => {
//       return res.json(err);
//     });
// });
