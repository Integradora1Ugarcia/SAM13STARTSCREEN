const request = require('supertest');
const app = require('../app');

describe('GET /api/photos/', () => {
  it('Should return 200 OK', (done) => {
    request(app)
      .get('/api/photos/')
      .expect(200, done);
  });
});