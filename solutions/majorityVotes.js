/** Return the vote with the majority count. */
function majorityVote(votes) {
    // basic validation
    if (!votes) throw new Error("Input array cannot be empty")
    if (!Array.isArray(votes)) throw new Error("Input should be of type array")
    if (votes.length < 1) throw new Error("Input array should contain at least one element")

    let countVotes = {} // store votes as { A: 4, B: 1, C: 1 }

    for (let v of votes) {
        // validate each vote
        if (typeof v !== "string") throw new Error("Input array should only contain string elements")
        if (countVotes[v] === undefined) // current vote is new
            countVotes[v] = 1 // init a new property for the current vote
        else {
            countVotes[v]++ // increment the count for the current vote
        }
    }

    for (let vote in countVotes)
        if (countVotes[vote] > (votes.length * 0.5))
            return vote // found a majority vote

    return null // no majority votes exist
}

// const result1 = majorityVote(["A", "A", "B"]) // "A"
// const result2 = majorityVote(["A", "A", "A", "B", "C", "A"]) // "A"
// const result3 = majorityVote(["A", "B", "B", "A", "C", "C"]) // null

// console.log(result1, result2, result3)















function majorityVotesTor(arr) {
    const count = {}  // Object to store frequency of each element
    const n = arr.length / 2  // Threshold

    // Loop through the array and count occurrences of each element
    for (const char of arr) {
        count[char] = (count[char] || 0) + 1  // Increment count for each character

        // If any element appears more than n, return it as the majority vote
        if (count[char] > n) {
            return char
        }
    }

    return null // Return null if no majority vote is found
}

// Example usage:
console.log(majorityVotesTor(["A", "A", "B"]));      
console.log(majorityVotesTor(["A", "A", "A", "B", "C", "A"]));
console.log(majorityVotesTor(["A", "B", "B", "A", "C", "C"]));








function majority(array) {
    const voteSymbol = [ "A", "B", "C" ]

    let index = voteSymbol.indexOf("B")

    const symbolCount = [ 2, 1, 1 ]

    const voteCount = [ ["A", 2], ["B", 1], ["C", 1] ]

    const myObj = { name: "Warren", age: 32 }

    myObj["name"]
}


module.exports = { majorityVotesTor }