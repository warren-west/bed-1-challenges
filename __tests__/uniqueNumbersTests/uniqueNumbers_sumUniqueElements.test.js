const { sumUniqueElements } = require('../../solutions/uniqueNumbers')

// Happy day:

test("Inputting [1, 2, 3] should return the sum value 6", () => {
    expect(sumUniqueElements([1, 2, 3])).toBe(6)
})
test("Inputting [1] should return the sum value 1", () => {
    expect(sumUniqueElements([1])).toBe(1)
})
test("Inputting [-1, -2, -3] should return the sum value -6", () => {
    expect(sumUniqueElements([-1, -2, -3])).toBe(-6)
})
test("Inputting [-1, 5, -3] should return the sum value 1", () => {
    expect(sumUniqueElements([-1, 5, -3])).toBe(1)
})

// exceptions:

test("Inputting [] should throw an error", () => {
    expect(() => sumUniqueElements([])).toThrow(Error)
})
test("Inputting null should throw an error", () => {
    expect(() => sumUniqueElements(null)).toThrow(Error)
})
test("Inputting undefined should throw an error", () => {
    expect(() => sumUniqueElements(undefined)).toThrow(Error)
})
test("Inputting empty string should throw an error", () => {
    expect(() => sumUniqueElements("")).toThrow(Error)
})
test("Inputting Boolean should throw an error", () => {
    expect(() => sumUniqueElements(false)).toThrow(Error)
})
test("Inputting ['a', 'b'] should throw an error", () => {
    expect(() => sumUniqueElements(['a', 'b'])).toThrow(Error)
})
test("Inputting { a: 1, b: 2} should throw an error", () => {
    expect(() => sumUniqueElements({ a: 1, b: 2})).toThrow(Error)
})
