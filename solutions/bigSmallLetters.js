export function capitalsToFront(word) {
    let bigLetters = ""
    let smallLetters = ""

    for (let character of word) {

        // convert the original letter to uppercase
        let charUpperCase = character.toUpperCase()

        // check if the original letter is the same as the letter converted to uppercase
        if (character === charUpperCase) {

            // the original letter is UPPERcase
            // add the original letter to the first part of the output
            bigLetters += character // bigLetters = bigLetters + character

        } else {

            // the original letter is LOWERcase
            // add the original to the last part of the output
            smallLetters += character
        }
    }

    return bigLetters + smallLetters
}

export function capToFrontV2(word) {
    // split the word into an array of letters,
    // filter the letters into an array of only lower or uppercase
    // join the filtered letters
    const bigLetters = word.split("").filter((char) => char.toUpperCase() === char).join("")
    const smallLetters = word.split("").filter((char) => char.toUpperCase() !== char).join("")

    return bigLetters + smallLetters
}

export function capToFrontV3(word) {
    // try it out using char codes
    // uppercase char code range is 65 - 90
    // lowercase char code range is 97 - 122
    
    // Hints:
    let letterCFromCharCode = String.fromCharCode(67)
    let letterCCharCode = "C".charCodeAt(0)
    
    console.log(letterCFromCharCode)
    console.log(letterCCharCode)

    // try solving it 😉
}