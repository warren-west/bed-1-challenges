const { countUnique } = require('../../solutions/uniqueNumbers')

// Happy Days:
test("The input [ 1, 1, 1, 2, 2, 2, 3, 3 ], should return [3, 6]", () => {
    expect(countUnique([ 1, 1, 1, 2, 2, 2, 3, 3 ])).toEqual([3, 6])
})
test("The input [ 1, 1, 1, 1, 1, 1, 1 ], should return [1, 1]", () => {
    expect(countUnique([ 1, 1, 1, 1, 1, 1, 1 ])).toEqual([1, 1])
})
test("The input [ 1, 2, 3, 4, 5, 6, 7 ], should return [7, 28]", () => {
    expect(countUnique([ 1, 2, 3, 4, 5, 6, 7 ])).toEqual([7, 28])
})
test("The input [ 7, 1, 7, 6, 5, 5, 2, 8, 2 ], should return [6, 29]", () => {
    expect(countUnique([ 7, 1, 7, 6, 5, 5, 2, 8, 2 ])).toEqual([6, 29])
})

