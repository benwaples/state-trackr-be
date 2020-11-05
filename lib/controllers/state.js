const { Router } = require('express');
const State = require('../models/State');


module.exports = Router()
  .post('/', (req, res, next) => {
    State.insert(req.body)
      .then(state => res.send(state))
      .catch(next);
  });
