
/**
 * @description This function will search for "Nemo" in the given sentence.
 * @param {String} sentence The sentence to be searched for "Nemo".
 * @returns A string stating whether Nemo was found, and at what position.
 */
export function findNemo(sentence) {
    const searchTerm = "Nemo"

    const splitSentence = sentence.split(" ")

    for (let i = 0; i < splitSentence.length; i ++) {
        if (splitSentence[i] === searchTerm) {
            return `I found Nemo at ${i+1}!`
        }
    }

    // What does it mean if we reach this point?
    // Has anything been returned?

    return "I can't find Nemo 🐟"
}

export function findNemoV2(sentence) {
    const splitSentence = sentence.split(" ")
    
    let index = splitSentence.indexOf("Nemo")
    
    return index == -1 ? "I can't find Nemo 🐟" : `I found Nemo at ${index+1}!`
}

export function findNemoV3(sentence) {
    const splitSentence = sentence.split(" ")

    let index = splitSentence.indexOf("Nemo")
    if (index == -1) return "I can't find Nemo 🐟"
    else return `I found Nemo at ${index+1}!`
}