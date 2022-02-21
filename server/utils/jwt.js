const jwt = require("jsonwebtoken");
const KEY1 = process.env.KEY1;

const getToken = (gamer) => {
  const token = jwt.sign({ gamerID: gamer.id }, KEY1, { expiresIn: "2d" });
  return token;
};

const decodeTKN = (token) => {
  try {
    return jwt.decode(token, KEY1);
  } catch (err) {
    return null;
  }
};

module.exports = { getToken, decodeTKN };
