//Using super test library
const request = require('supertest');

//Use server express
const express = require('express');

//Use mock app
const app = express();

//Check if the response status is 200 ok
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'josh' });
});

//Expect pass with 200 status
request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

//For get method
  describe('GET /user', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

//For post method
describe('POST /user', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});