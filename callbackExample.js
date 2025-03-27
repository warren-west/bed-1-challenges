function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
}

function filterNumbers(numbers, filter) {
    const result = numbers.filter((num) => filter(num))
    return result
}

function isPositive(num) {
    return num >= 0
}
function isEven(num) {
    return num % 2 === 0
}
function isOdd(num) {
    return !isEven(num)
}
function isNegative(num) {
    return !isPositive(num)
}

module.exports = { forEach, filterNumbers, isEven, isPositive, isOdd, isNegative }