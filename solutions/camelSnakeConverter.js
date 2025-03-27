function convertCamelSnake(text) {
    // if (inputString.includes('_')) return snakeMap(inputString)
    // else return camelToSnakeTernary(inputString)

    const characters = text.split('')
    let output = ""

    for (let index in characters) {
        if (characters[index].toUpperCase() === characters[index]) {
            // found an uppercase letter
            output += `_${characters[index].toLowerCase()}`
        } else {
            // not uppercase
            output += characters[index]
        }
    }

    return output
}

function camelToSnakeTernary(text) {
    let output = ""

    for (let c of text)
        // if the current string is uppercase, append it with an underscore to the output
        output += c === c.toUpperCase() ? `_${c.toLowerCase()}` : c

    return output
}

function snakeToCamel(inputString) {
    // split the input by '_'
    let split = inputString.split('_')

    // the first part won't change because we don't have to convert anything to uppercase
    let output = split[0]

    // loop through each section of the split
    // except the first (it doesn't change)
    for (let i = 1; i < split.length; i++) {
        output += `${split[i].slice(0, 1).toUpperCase()}${split[i].slice(1)}`
    }

    return output
}

function snakeMap(inputString) {
    // retrieve the first character and make it lowercase
    const first = inputString[0].toLowerCase()

    // build the rest of the output with a .split() .map() .join()
    let output = inputString.split('_').map(piece => `${piece.slice(0, 1).toUpperCase()}${piece.slice(1)}`).join('')

    // return the first lowercase character + output - first character
    return first + output.slice(1)
}

// kebab -> hello-world-this-is-me
// pascal -> HelloWorldThisIsMe
// snake -> hello_world_this_is_me
// camel -> helloWorldThisIsMe


// DAVID
function snakeCamelDave(text) { // hello_wORLd -> helloWorld
    if (text.includes("_")) {
        return text
            .split("_")
            .map((word, index) =>
                index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join("")
    } else {
        // dealing with "HelloWorld" - convert 1st character to lowerCase
        if (text[0] === text[0].toUpperCase())
            text = text.slice(0, 1).toLowerCase() + text.slice(1)

        let result = ""

        for (let i = 0; i < text.length; i++) {
            let char = text[i]
            if (char >= "A" && char <= "Z") {
                result += "_" + char.toLowerCase()
            } else {
                result += char
            }
        }
        return result
    }
}



// 1. Receive the word
// 1.1. Create output variable ""
// 2. Iterate through it one letter at a time
// 3. If the letter is uppercase - do something
// 3. If it's lowercase - do something else
// 4. Return the output





// console.log(convertCamelSnake("helloWorld"))        // "hello_world"
// console.log(convertCamelSnake("thisIsALongWord"))   // "this_is_a_long_word"
// console.log(convertCamelSnake("other_way_around"))  // "otherWayAround"