import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('profile routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('create a profile for our user via POST', async () => {
    const res = await request(app)
      .post('/api/v1/profiles')
      .send({
        name: 'Cat',
        favoriteCharacter: 'Hermes'
      });

    console.log(res.body);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id:'1',
      name:'Cat',
      favoriteCharacter: 'Hermes',
      tagline: expect.any(String)
    });
  });

});
