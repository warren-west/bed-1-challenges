const revSentence = require('../../solutions/revSentence')
const WrongInputTypeError = require('../../solutions/customError')

// Happy day scenario: "I love robots"
test('"I love robots" returns "robots love I"', () => {
    expect(revSentence("I love robots")).toBe("robots love I")
})

test('undefined should throw an error', () => {
    expect(() => revSentence(undefined)).toThrow("Input cannot be empty, null, or undefined")
})

test('Entering a number will throw an error', () => {
    expect(() => revSentence(55)).toThrow(WrongInputTypeError)
    expect(() => revSentence(55)).toThrow("Input must be a string")
})