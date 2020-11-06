const { Router } = require('express');
const State = require('../models/State');


module.exports = Router()
  .post('/', (req, res, next) => {
    State.insert(req.body)
      .then(state => res.send(state))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    State.find()
      .then(states => res.send(states))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    State.findById(req.params.id)
      .then(state => res.send(state))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    State.update(req.params.id, req.body)
      .then(updatedState => res.send(updatedState))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    State.delete(req.params.id)
      .then(deletedState => res.send(deletedState))
      .catch(next);
  })
;
