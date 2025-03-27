function splitString(string) {
    const result = []

    for (let i = 2; i < string.length; i += 2)
        result.push(string.substring(i - 2, i))

    string.length % 2 !== 0
        ? result.push(`${string.slice(-1)}_`)
        : null

    return result
}

console.log(splitString("abc"))
console.log(splitString("abcdef"))