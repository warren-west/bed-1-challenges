/**
 * A function that reverses an input string.
 * Example: "I like robots" returns "robots like I".
 * @param {String} sentence is the string that will be reversed.
 * @returns a string, reversed.
 */
export function reverseSentence(sentence) {
    return sentence.split(" ").filter(item => item !== "").reverse().join(" ")
}