/**
 * Transform a list of chords into jazz chords, appending a "7" if it doesn't already exist.
 * @param {Array} chordsArray 
 */
const jazzify = (chordsArray) => chordsArray.map((item) => item.endsWith("7") ? item : item + 7)


console.log(jazzify(["G", "F", "C"]))
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]))
console.log(jazzify(["Dm", "G", "E7", "A"]))
console.log(jazzify([]))
