const pool = require('../utils/pool');

module.exports = class State {
  id;
  name;
  dateVisited;
  wasFun;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.dateVisited = row.date_visited;
    this.wasFun = row.was_fun;
  }

  static async insert(state) {
    const { rows } = await pool.query(
      'INSERT INTO states_visited (name, date_visited, was_fun) VALUES ($1, $2, $3) RETURNING *',
      [state.name, state.dateVisited, state.wasFun]
    );

    return new State(rows[0]);
  }

};
