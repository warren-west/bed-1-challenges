const { majorityVotesTor } = require('../../solutions/majorityVotes')

test("Input ['A', 'A', 'B'] should return 'A'", () => {
    expect(majorityVotesTor(['A', 'A', 'B'])).toBe('A')
})
test("Input ['A', 'A', 'A', 'B', 'C', 'A'] should return 'A'", () => {
    expect(majorityVotesTor(["A", "A", "A", "B", "C", "A"])).toBe('A')
})
test("Input ['A', 'B', 'B', 'A', 'C', 'C'] should return 'A'", () => {
    expect(majorityVotesTor(["A", "B", "B", "A", "C", "C"])).toBeNull()
})

