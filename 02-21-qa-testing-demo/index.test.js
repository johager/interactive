 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  test('should run', () => {
    // assertion
    expect(2).toBe(2)
  })

  test('first name should be Patten', () => {
    expect(testData.firstName).toBe('Patten')
  })

  describe('formatTitle tests', () => {
    const formattedTitle = formatTitle(testData.title)

    test('returns string', () => {
      expect(typeof formattedTitle).toBe('string')
    })
    
    it('formats title correctly', () => {
      expect(formattedTitle).toBe('Nulla Ac')
    })

    // it('formats title correctly (should fail)', () => {
    //   expect(formattedTitle).toBe('N')
    // })
  })

  describe('shortenBio tests', () => {
    const shortenedBio = shortenBio(testData.bio)

    test('should shorten bio string', () => {
      expect(shortenedBio.length).toBeLessThan(testData.bio.length)
    })

    it('should add ... to end of string', () => {
      expect(shortenedBio).toContain('...')
    })
  })

  describe('convertLength tests', () => {
    it('should return array with length 2', () => {
      const res = convertLength(testData.length)
      expect(res).toHaveLength(2)
    })
    
    test('can handle numbers under 60', () => {
      const res = convertLength(30)
      expect(res[0]).toEqual(0)
      expect(res[1]).toEqual(30)
    })
  })