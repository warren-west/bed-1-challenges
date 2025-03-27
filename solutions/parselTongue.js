
function isParselTongue(sentence) {
    const words = sentence.toLowerCase().split(' ')

    // loop through each word
    for (let word of words) {
        // if the word contains an 's', it should also contain 'ss'
        if (word.includes('s') && !word.includes('ss'))
            return false
    }

    return true
}


function isParselEvery(sentence) {
    return sentence.toLowerCase().split(' ')
        .every(w => (w.includes('s') && w.includes('ss')) || !w.includes('s'))
}

function isParselFilter(sentence) {
    return sentence.toLowerCase().split(' ')
        .filter(w => w.includes('s') && !w.includes('ss')).length === 0
}

// console.log(isParselTongue("Sshe ssselects to eat that apple.")) // true
// console.log(isParselTongue("She ssselects to eat that apple.")) // false
// console.log(isParselTongue("Beatrice samples lemonade")) // false
// console.log(isParselTongue("You ssseldoms ssspeak sso boldly, ssso messmerizingly.")) // true

// console.log(isParselEvery("Sshe ssselects to eat that apple.")) // true
// console.log(isParselEvery("She ssselects to eat that apple.")) // false
// console.log(isParselEvery("Beatrice samples lemonade")) // false
// console.log(isParselEvery("You ssseldoms ssspeak sso boldly, ssso messmerizingly.")) // true

console.log(isParselFilter("Sshe ssselects to eat that apple.")) // true
console.log(isParselFilter("She ssselects to eat that apple.")) // false
console.log(isParselFilter("Beatrice samples lemonade")) // false
console.log(isParselFilter("You ssseldoms ssspeak sso boldly, ssso messmerizingly.")) // true