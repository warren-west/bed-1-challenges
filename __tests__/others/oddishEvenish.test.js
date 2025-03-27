const oddishEvenishStringNum = require('../../solutions/oddishEvenish');

// Happy day scenarios:
test('The number 43 returns "Oddish"', () => {
    // AAA standard (Arrange, Act, Assert)
    // Arrange: setting up variables, everything we need before executing the function we're testing
    const inputNumber = 43
    const expectedResult = "Oddish"
    // Act
    const actualResult = oddishEvenishStringNum(inputNumber)
    // Assert
    expect(actualResult).toBe(expectedResult)
});

test('The number 44 returns "Evenish"', () => {
    expect(oddishEvenishStringNum(44)).toBe("Evenish")
});

test('The number 44 returns "Evenish"', () => {
    expect(oddishEvenishStringNum(4433)).toBe("Evenish")
});

// Error testing:
test('The number 17.3 throws an error.', () => {
    // AAA
    // Arrange: (setting up the context)
    const inputNum = 17.3
    const expectedErrorMessage = "Input must be an integer."

    // Act & Assert (together, because you can't separate the error thrown from the function being executed)
    expect(() => oddishEvenishStringNum(inputNum)).toThrow(expectedErrorMessage)
});

test('A negative number should throw an error.', () => {
    expect(() => oddishEvenishStringNum(-2)).toThrow("Input must be a positive number.")
});

test('An undefined input should throw an error.', () => {
    expect(() => oddishEvenishStringNum(undefined)).toThrow("Input cannot be empty, undefined, or null. Input must be a number")
});

test('A boolean true input should throw an error.', () => {
    expect(() => oddishEvenishStringNum(true)).toThrow("Input cannot be empty, undefined, or null. Input must be a number")
});

test('A boolean false input should throw an error.', () => {
    expect(() => oddishEvenishStringNum(false)).toThrow("Input cannot be empty, undefined, or null. Input must be a number")
});

test('A string input should throw an error.', () => {
    expect(() => oddishEvenishStringNum('abc')).toThrow("Input cannot be empty, undefined, or null. Input must be a number")
});

test('An empty string input should throw an error.', () => {
    expect(() => oddishEvenishStringNum('')).toThrow("Input cannot be empty, undefined, or null. Input must be a number")
});

test('A null input should throw an error.', () => {
    expect(() => oddishEvenishStringNum(null)).toThrow("Input cannot be empty, undefined, or null. Input must be a number")
});

test('A NaN input should throw an error.', () => {
    expect(() => oddishEvenishStringNum(NaN)).toThrow("Input cannot be empty, undefined, or null. Input must be a number")
});