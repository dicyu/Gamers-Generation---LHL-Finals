const router = require("express").Router();
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

module.exports = (db) => {
  router.get("/", (req, res) => {
    const { userData } = req.body;

    // .catch((err) => {
    //   console.log("edit error, ", err);
    // });
  });

  return router;
};

// async function finalQue(queParam) {
//   let query = `UPDATE gamers SET `;
//   let que = req.body;
//   let id = req.session.id;

//   let newArrNames = [];
//   let newArrValues = [];

//   for (let item in que) {
//     if (req.body[item]) {
//       newArrNames.push(item);
//       if (password) {
//         newArrValues.push(bcrypt.hashSync(password, salt));
//       } else {
//         newArrValues.push(que[item]);
//       }
//     }
//   }

//   for (let i = 0; i < queParam.length - 1; i++) {
//     query = query + ` ${newArrNames[i]} = $${newArrValues[i]}`;
//   }

//   return query + ` WHERE id = ${id};`;
// }

// db.query(async () => {
//   await finalQue(queParam);
// });
