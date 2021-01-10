const Hobbits = require('./hobbitsModel')
const db = require('../data/dbConfig')

describe('Tests for the hobbitsModel', () => {

  beforeEach(async () => {
    await db('hobbits').truncate()
  })
  describe('insert()', () => {
    test('should insert the provided hobbits', async () => {
      await Hobbits.insert({ name: 'Gaffer' })
      await Hobbits.insert({ name: "Sam" })

      const hobbits = await db('Hobbits')
      expect(hobbits).toHaveLength(2)
    })

    test('should return the inserted object', async () => {
      let hobbit = await Hobbits.insert({ name: 'Gaffer' })
      expect(hobbit.name).toBe('gaffer')
      
      hobbit = await Hobbits.insert({ name: 'Sam' })
      expect(hobbit.name).toBe('Sam')

    })
    
    
    
  })
  
  
})
