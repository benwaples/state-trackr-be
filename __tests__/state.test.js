const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');

describe('state-trackr-be routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('should add a state to our DB via POST', async() => {
    return request(app)
      .post('/api/v1/states')
      .send({
        name: 'Washington',
        dateVisited: '10-10-15',
        wasFun: true
      })
      .then(res => expect(res.body).toEqual({
        id: expect.any(String),
        name: 'Washington',
        dateVisited: '10-10-15',
        wasFun: true
      }));
  });
});
