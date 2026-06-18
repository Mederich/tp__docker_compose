const request = require('supertest');
const app = require('./index');

describe('Backend API Tests', () => {
  test('GET /api/health returns 200 and status ok', async () => {
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');
    expect(response.body).toEqual({ status: 'ok' });
  });

  test('GET /api/unknown returns 404 for non-existent route', async () => {
    const response = await request(app).get('/api/unknown');
    expect(response.statusCode).toBe(404);
  });
});
