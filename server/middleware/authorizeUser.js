const { decodeTKN } = require("../utils/jwt");

const authorizeUser = (req, res, next) => {
  const { token } = req.query;
  const decodedToken = decodeTKN(token);
  if (!decodedToken) {
    return res.status(401).json({ error: "not Authorized - please try again" });
  }

  req.currentUser = {
    gamerID: decodedToken.gamerID,
    token,
  };

  next();
};

module.exports = { authorizeUser };
