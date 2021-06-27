('use strict');

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

xtest('multiplies 2*3 to equal 6', ()=>{
  expect(2*3).toBe(6);
});

describe('First Test Group', ()=>{
  it('Handles invalid requests', async ()=>{
    const response = await request.get('/hello');
    expect(response.status).toEqual(404);
  });

  it('Handles errors', async ()=>{
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });

  it('Handles correct routes', async ()=>{
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });
});