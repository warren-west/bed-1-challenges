const vowels = {a: '0', e: '1', i: '2', o: '2', u: '3'}
const suffix = 'aca'

/*
* Karaca Encryption
* Encrypt an input string by:
* 1. Reversing the string.
* 2. Replacing all vowels with mapped numbers (a: '0', e: '1', i: '2', o: '2', u: '3').
* 3. Adding 'aca' to the end.
*/
function encrypt(string) {
    // 1. reverse the input
    let revArray = string.split('').reverse()

    // 2. replace vowels with numbers
    let mappedArray = revArray.map(c => vowels[c] ? vowels[c] : c)

    // 3. add 'aca'
    return mappedArray.join('').concat(suffix)
}

function encrypt2(string) {
    return string
    .split('')
    .reverse()
    .map(c => vowels[c] ? vowels[c] : c)
    .join('')
    .concat(suffix)
}

console.log(encrypt("banana"))
console.log(encrypt("karaca"))
console.log(encrypt("burak"))
console.log(encrypt("alpaca"))
console.log(encrypt("Warren"))