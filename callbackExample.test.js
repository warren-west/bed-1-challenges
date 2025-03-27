const {forEach, filterNumbers} = require('./callbackExample')

const mockCallback = jest.fn((x) => 'Teacher ' + x)

test('forEach mock function', () => {
    forEach(['John', 'The Man', 'Doe'], mockCallback)

    expect(mockCallback.mock.calls).toHaveLength(3)
    console.log(mockCallback.mock)

    expect(mockCallback.mock.calls[0][0]).toBe('John')

    expect(mockCallback.mock.calls[1][0]).toBe('The Man')

    expect(mockCallback.mock.calls[2][0]).toBe('Doe')

    expect(mockCallback.mock.results[0].value).toBe('Teacher John')
    expect(mockCallback.mock.results[1].value).toBe('Teacher The Man')
    expect(mockCallback.mock.results[2].value).toBe('Teacher Doe')
})

test("", () => {
    const mockEvenFilter = jest.fn((n) => n % 2 === 0)

    filterNumbers([1, 2, 3, 4, 5, 6, 7, 8], mockEvenFilter)

    console.log(mockEvenFilter.mock)
    // expect(mockEvenFilter.mock.)

    expect(filterNumbers([1, 2, 3, 4, 5, 6, 7, 8], mockEvenFilter)).toBe()
})