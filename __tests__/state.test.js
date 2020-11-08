require('../lib/data/data-helper');
const request = require('supertest');
const app = require('../lib/app');
const State = require('../lib/models/State');

describe('state-trackr-be routes', () => {

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

  it('should return all states via GET', async() => {
    return request(app)
      .get('/api/v1/states')
      .then(res => expect(res.body.length).toEqual(20));
  });

  it('should return a single state by id via GET', async() => {
    const firstState = (await State.find())[0];
    return request(app)
      .get(`/api/v1/states/${firstState.name}`)
      .then(res => expect(res.body).toEqual(firstState));
  });

  it('should update a state via PATCH', async() => {
    const firstState = (await State.find())[0];

    return request(app)
      .patch(`/api/v1/states/${firstState.id}`)
      .send({
        name: 'LA',
        dateVisited: '10-15-15',
        wasFun: false
      })
      .then(res => expect(res.body).toEqual({
        id: expect.any(String),
        name: 'LA',
        dateVisited: '10-15-15',
        wasFun: false
      }));

  });

  it('should delete a visit by id via DELETE', async() => {
    const firstState = (await State.find())[0];
    return request(app)
      .delete(`/api/v1/states/${firstState.id}`)
      .then(res => expect(res.body).toEqual(firstState));
  });
});
