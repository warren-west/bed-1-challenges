export function multiplyIndexes(array) {
    // return 0 if empty array
    if (array.length === 0) {
        console.log("Array empty, returned 0")
        return 0
    }

    let total = 0

    // for...in
    for (let index in array) {
        // console.log(index) // 0, 1, 2
        // console.log(array[index]) // 5, 4, 3

        total += (index * array[index])
    }
    
    console.log("Completed with total:", total)
    return total
}

/**
 * Receive an array, and return the sum of the elements multiplied by their indexes.
 * For example: [ 2, 3, 4 ]
 * Will return ( 2 * 0 ) + ( 3 * 1 ) + ( 4 * 2 ) = 11
 * 
 * @param {Number[]} array 
 * @returns A single number
 */

export function multipleV2(array) {
    // Hint: You'll need to use .map() and / or .reduce()
    // Also: Remember you can chain these functions, e.g. array.map().map().map() // you get the idea

    let reduceResult = array.reduce((prev, curr, index) => {
        return prev + (curr * index)
    }, 0)
    
    
    let result = array.map((num, index) => num * index).reduce((prev, curr) => prev + curr, 0)

    return [reduceResult, result]
}