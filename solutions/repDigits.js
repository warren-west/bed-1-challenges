export function isRepDigit(number) {

    // return false for negative numbers
    if (number < 0) {
        return false
    }

    // 0 -> true
    if (number == 0)
        return true

    // ideas --------------------------------------
    // 55 -> true
    // 15 -> false
    // 7777 -> true
    // 7787 -> false
    // 99999 -> true

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