function oddishEvenishNumeric(input) {
    let currentDigit = null
    let count = 0
    let sum = 0

    do {
        count++
        currentDigit = input % (10 ** count)

        console.log(`count: ${count} sum: ${sum} currentDig: ${currentDigit}`)

        if (currentDigit > 0) sum += currentDigit

    } while (currentDigit !== 0 && count < 10)

    return sum % 2 == 0 ? "Evenish" : "Oddish"
}


function oddishEvenishStringNum(input) {
    // basic validation
    if (!input || typeof input !== "number") // empty, undefined, null
        throw new Error("Input cannot be empty, undefined, or null. Input must be a number")

    if (input <= 0) // catch any negative numbers
        throw new Error("Input must be a positive number.")

    if (input !== Math.trunc(input)) // check if number has decimal points (parseInt() also works)
        throw new Error("Input must be an integer.")

    const split = input.toString().split('')

    let sum = 0
    split.forEach(num => {
        sum += parseInt(num)
    })
    // console.log(sum)

    return sum % 2 === 0 ? "Evenish" : "Oddish"
}


// console.log(oddishEvenishNumeric(43))
// console.log(oddishEvenishNumeric(373))
// console.log(oddishEvenishNumeric(4433))

// console.log(oddishEvenishStringNum(43))
// console.log(oddishEvenishStringNum(373))
// console.log(oddishEvenishStringNum(4433))

// passing a function into the function

module.exports = oddishEvenishStringNum