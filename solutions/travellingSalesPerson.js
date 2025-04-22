/**
 * Given the number of cities, n, calculate the number of possible routes.
 * E.g.: 3 cities, A, B, and C
    * A -> B -> C
    * A -> C -> B
    * B -> A -> C
    * B -> C -> A
    * C -> B -> A
    * C -> A -> B
 * @param {Number} n The number of cities to travel between 
 */
function tsp(n) {
    // basic validation
    if (isNaN(n) || !n || n < 1) return null

    let total = 1

    for (let i = 2; i <= n; i++)
        total *= i

    return total
}

function travelingSalesPerson(n) {
    // validation
    if (!n || n < 1 || isNaN(n)) {
        return null
    }

    let output = 1

    for (let i = 1; i <= n; i++) {
        output *= i
    }

    return output
}

function tspRecursion(n) {
    if (n === 1) return 1
    else return n * tspRecursion(n - 1)
}

console.log(travelingSalesPerson(1))
console.log(travelingSalesPerson(3))
console.log(travelingSalesPerson(4))
console.log(travelingSalesPerson(9))

console.log(tspRecursion(3))
console.log(tspRecursion(4))
console.log(tspRecursion(9))