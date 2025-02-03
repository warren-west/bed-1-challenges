/**
 * Returns true for a special array, else false.
 * A special array is an array where each element and its index are both even, or both odd.
 * @param {Array} numbers 
 */
export function isSpecialArray(numbers) {

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 == 0 !== numbers[i] % 2 == 0) {
            return false
        }
    }

    return true
}

// [2, 7, 4, 9, 6, 1, 6, 3] -> true
// [2, 7, 9, 1, 6, 1, 6, 3] -> false
// [2, 7, 8, 8, 6, 1, 6, 3] -> false

