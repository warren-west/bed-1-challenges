import { isRepDigit } from './solutions/repDigits.js'
import { reverseSentence } from './solutions/revSentence.js'
import { possibleBonusDynamicDieSize, possibleBonusV1, possibleBonusV2 } from './solutions/tileTeamwork.js'
import { jackpot, jackpotV2 } from './solutions/jackpot.js'
import { validateObject, validateStringInput } from './solutions/validateInput.js'
import { findNemo, findNemoV2 } from './solutions/findingNemo.js'
import { capitalsToFront, capToFrontV2, capToFrontV3 } from './solutions/bigSmallLetters.js'
import { multiplyIndexes } from './solutions/multiplyIndexes.js'

// Test repeating digits
// console.log("-11", isRepDigit(-11))
// console.log("0", isRepDigit(0))
// console.log("9999", isRepDigit(9999))
// console.log("9979", isRepDigit(9979))

// // Test reverse words in a string
// console.log(reverseSentence("hello     world"))
// console.log(reverseSentence("  this is another sentence"))
// console.log(reverseSentence("my favorite superhero is Ironman    "))

// Test Tile Teamwork Tactics
// console.log(possibleBonusV1(5, 3)) // false
// console.log(possibleBonusV1(5, 8)) // true
// console.log(possibleBonusV1(5, 33)) // false

// console.log(possibleBonusV2(5, 3)) // false
// console.log(possibleBonusV2(5, 8)) // true
// console.log(possibleBonusV2(5, 33)) // false


// console.log(possibleBonusDynamicDieSize(-2, 2, 6)) // undefined
// console.log(possibleBonusDynamicDieSize(2, -2, 6)) // undefined
// console.log(possibleBonusDynamicDieSize(2, 2, -6)) // undefined

// console.log(possibleBonusDynamicDieSize(3, 1, 2)) // false

// console.log(possibleBonusDynamicDieSize(2, 3, 2)) // true
// console.log(possibleBonusDynamicDieSize(2, 6, 2)) // false

// console.log(jackpot(["!", "@", "#", "$"]))
// console.log(jackpot(["SS", "SS", "SS", "SS"]))
// console.log(jackpot(["SS", "ss", "SS", "SS"]))
// console.log(jackpot(["SS", "SS", "11", "SS"]))
// console.log(jackpot(["SS", "SS", "SS", ""]))

// console.log(jackpotV2(["2", "2", "2", "2"]))
// console.log(jackpotV2(["2", "2", "22", "2"]))

// console.log("prompt:", validateStringInput(prompt("Enter a string:")))
// console.log("undefined:", validateStringInput(undefined))
// console.log("null:", validateStringInput(null))
// console.log("'':", validateStringInput(""))

// console.log(jackpot([])) // array.length == 0
// console.log(jackpot(null))
// console.log(jackpot(undefined))
// console.log(jackpot())

// console.log(jackpot(["4", "4", "4", "4"]))
// console.log(jackpot(["4", "4", "4", "3"]))

// isRepDigit()
// isRepDigit(undefined)
// isRepDigit(null)

// possibleBonusV1()
// possibleBonusV1(null, undefined)
// possibleBonusV1("hello", "")

// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof [])
// console.log(typeof {})

// Arrays are objects 😮
// console.log({ name: "Warren" })
// console.log([ "1", "2", "3" ])

// console.log(validateObject({}))
// console.log(validateObject())
// console.log(validateObject(null))
// console.log(validateObject(undefined))
// console.log(validateObject({ hello: "World!" }))
// console.log(validateObject(1))
// console.log(validateObject("115"))
// console.log(validateObject(false))
// console.log(validateObject(true))
// console.log(validateObject(["test"]))


// fetch("myurl.com/api")
//   .then((resp) => resp.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error))

// $.ajax({
//     url: "myurl.com/api",
//     success: (resp) => {
//         console.log(resp) // already deserialized to JS Object
//     },
//     error: (error) => {
//         console.log(error)
//     }
// })

// console.log(JSON.stringify({name: "Warren", age: 32}))
// console.log(JSON.parse('{"name": "Warren", "age": 32}'))

// console.log(findNemo("I am finding Nemo !"))
// console.log(findNemo("Nemo is me"))
// console.log(findNemo("I Nemo am"))
// console.log(findNemo("The fish you are looking for doesn't exist here"))
// console.log(findNemoV2("I am finding Nemo !"))
// console.log(findNemoV2("Nemo is me"))
// console.log(findNemoV2("I Nemo am"))
// console.log(findNemoV2("The fish you are looking for doesn't exist here"))

// console.log(capitalsToFront("hApPy"))
// console.log(capitalsToFront("moveMENT"))
// console.log(capitalsToFront("shOrtCAKE"))

// console.log(capToFrontV2("hApPy"))
// console.log(capToFrontV2("moveMENT"))
// console.log(capToFrontV2("shOrtCAKE"))

// capToFrontV3()

console.log(multiplyIndexes([5, 4, 3]))
console.log(multiplyIndexes([]))
console.log(multiplyIndexes([5, 4, 3, 5, 3, 6, 7]))