const { validateInputArray } = require('../../solutions/uniqueNumbers')

// Happy day:
test("[1, 2, 3] should return true", () => {
    expect(validateInputArray([1, 2, 3])).toBeTruthy()
})

// Exceptions:
test("Empty input should return false", () => {
    expect(validateInputArray()).toBeFalsy()
})
test("Number input should return false", () => {
    expect(validateInputArray(5)).toBeFalsy()
})
test("Empty array input should return false", () => {
    expect(validateInputArray([])).toBeFalsy()
})
test("Boolean input should return false", () => {
    expect(validateInputArray(true)).toBeFalsy()
})
test("String input should return false", () => {
    expect(validateInputArray("abcdef")).toBeFalsy()
})
test("Empty string input should return false", () => {
    expect(validateInputArray("")).toBeFalsy()
})
test("Null input should return false", () => {
    expect(validateInputArray(null)).toBeFalsy()
})
test("Undefined input should return false", () => {
    expect(validateInputArray(undefined)).toBeFalsy()
})
test("Object input {a:1, b:2} should return false", () => {
    expect(validateInputArray({ a: 1, b: 2 })).toBeFalsy()
})