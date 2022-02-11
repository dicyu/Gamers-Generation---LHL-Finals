const router = require('express').Router();

const users = ['Cassie', 'Josh', 'Dickson'];

module.exports = (db) => {
  // Routes go here
  router.get('/', (req, res) => {
    res.json(users);
  });

  return router;

}
