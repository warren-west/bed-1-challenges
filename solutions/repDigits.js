function isRepDigitMath(num) {
    // if (num === 0) return true
    
    const lastDig = num % 10

    let check = num, count = 0

    do {
        count++
        if (check % 10 !== lastDig)
            return false

        check = Math.trunc(num / (10 ** count))
    } while (check > 0)

    return true
}

console.log(isRepDigitMath(0))
console.log(isRepDigitMath(111))
console.log(isRepDigitMath(66))
console.log(isRepDigitMath(3))
console.log(isRepDigitMath(123))
console.log(isRepDigitMath(11))
console.log(isRepDigitMath(112))
console.log(isRepDigitMath(211))
console.log(isRepDigitMath(121))
console.log(isRepDigitMath(9999))















export function isRepDigit(number) {

    // return false for negative numbers
    if (number < 0) {
        return false
    }

    // 0 -> true
    if (number == 0)
        return true

    // ideas --------------------------------------
    // 2 -> true
    // 55 -> true
    // 15 -> false
    // 7777 -> true
    // 7787 -> false
    // 99999 -> true

    // repDecimal
    // 55.555
    // 66.6
    // 99.99

    // make an array out of the digits
    // and check each element against the
    // last one

    // start incrementing from the
    // second number, comparing against 
    // the first number

    // compare "number" against itself
    // number == number -> always return true

    // convert the number to string
    // split()
    // ideas --------------------------------------

    // convert the number to a string
    // then split the string into an array of digits
    let numAsStringArray = number.toString().split('')

    // loop through the array of digits
    for (let i = 1; i < numAsStringArray.length; i++) {
        // check every combination of digits
        if (numAsStringArray[i] !== numAsStringArray[0]) {
            return false // if there is a non-repeating digit, return false
        }
    }

    return true // all the digits are repeating
}

export function addTwoNumbers(a, b) {
    return a + b
}