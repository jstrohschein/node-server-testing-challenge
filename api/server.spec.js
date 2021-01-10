const server = require('./server')
const request = require('supertest')
const { get } = require('./server')


describe('server.js', () => {
  test('should check for testing env', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })

  describe('GET /', () => {
    test('should return 200 OK', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200)
        })
    })

    test('should have response body that is JSON', () => {
      return request(server).get('/')
        .then(res => {
          expect(res.type).toBe('application/json')
        })
    })

    test('should return {api: "up"}', () => {
      return request(server).get('/')
        .then(res => {
          expect(res.body).toEqual({ api: "up" })
        })
    })
    
  })
  
  
})
