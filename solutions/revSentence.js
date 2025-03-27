const WrongInputTypeError = require('./customError')

/**
 * Reverses an input string.
 * @param {String} sentence is the string that will be reversed.
 * @returns a string, reversed.
 * @throws {WrongInputTypeError} if the argument is not a string
 * @example
 * reverseSentence("I love robots") // returns "robots love I"
 */
function reverseSentence(sentence) {
    if (!sentence) // empty, undefined, or null
        throw new Error("Input cannot be empty, null, or undefined")

    if (typeof sentence !== "string")
        throw new WrongInputTypeError("Input must be a string")

    return sentence.split(" ").filter(item => item !== "").reverse().join(" ")
}

module.exports = reverseSentence