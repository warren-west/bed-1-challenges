// throwback to first assignment

// create a function that validates a string input
// the input should not be an empty string - ""
// the input should not be empty - undefined
// the input should not be null

// should return true or false
// true if the input is valid
// false if it is invalid
export function validateStringInput(string) { // "Hello"

    console.log(`${string}`, !string)
    console.log(`${string}`, !!string)

    if (!string) {
        return false
    }

    // if (string === "") return false

    // if (string == null) return false

    // if (string == undefined) return false


    return true

}

// Coercion -> convert something usually to true / false
// console.log(Boolean(0))
// console.log(Boolean(1))
// console.log(Boolean("Hello"))
// console.log(Boolean(""))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(101))
// console.log(Boolean(true))
// console.log(Boolean(false))


// now, let's do the same thing for an array
/**
 * Determines if the input array is valid. 
 * @param {*} array 
 * @returns True if the input array is valid, else false.
 */
export function validateArray(array) {

    // make sure array is not empty, null, or undefined
    if (!array || array.length == 0)
        return false

    return true
}


// then, let's do the same thing for an object

export function validateObject(object) {

    // object: { name: "Warren" } object.length: undefined
    // object: { name: "Warren", length: "long" }

    // make sure the object is not empty, undefined, or null
    // and make sure it has more than 0 properties
    if (!object || Object.keys(object).length == 0)
        return false

    // check if object has a type other than object
    if (typeof object !== "object") {
        return false
    }

    // Check that the object is not an array
    if (Array.isArray(object))
        return false

    return true
}