function isSmooth(sentence) {

    const split = sentence.split(' ')

    for (let i = 0; i < split.length - 2; i++) {
        const currLast = split[i][split[i].length - 1]
        const nextFirst = split[i + 1][0]
        
        console.log(`Comparing ${currLast} to ${nextFirst}`)

        if (currLast.toLowerCase() !== nextFirst.toLowerCase())
            return false
    }

    return true
}

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids")) // true
console.log(isSmooth("Someone is outside the doorway")) // false
console.log(isSmooth("She eats super righteously")) // true



/**
 * Last letter of each word is identical to the first letter of the followin word
 * 
 *Example:
  Carlos swam masterfully - true
  Someone is outside the doorway - false
  She eats super righteously - true
 */


function smoothYosmel() {
    const mySentence = "Shi eats super righteously"
    const myArr = mySentence.split(' ')

    for (let i = 0; i < myArr.length; i++) {

        //First word
        // let splitWord1 = .split('')
        let lastLetter1 = myArr[i][myArr[i].length - 1]

        //Second word
        if (myArr[i + 1]) {
            let firstLetter2 = myArr[i + 1][0]

            if (lastLetter1 !== firstLetter2) {
                return false
            }
        }

    }
    return true
}

// console.log(smoothYosmel())

// function isSmooth(sentence) {
//     const words = sentence.split(" ")
//     for (let i = 0; i < words.length - 1; i++) {
//         const lastLetter = words[i].slice(-1).toLowerCase()
//         const firstLetter = words[i + 1][0].toLowerCase()
//         if (lastLetter !== firstLetter) {
//             return false
//         }
//     }
//     return true
// }

// console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"))
// console.log(isSmooth("Someone is outside the doorway"))
// console.log(isSmooth("She eats super righteously"))