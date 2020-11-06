const State = require('../models/State');

const chance = require('chance').Chance();

module.exports = async({ stateCount = 20 } = {}) => {
  const statesToInsert = [...Array(stateCount)]
    .map(() => ({
      name: chance.state(),
      dateVisited: chance.date(),
      wasFun: chance.bool()
    }));

  const insertedStates = await Promise.all(statesToInsert.map(state => State.insert(state)));
};
