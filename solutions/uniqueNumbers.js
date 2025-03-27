function countUnique(numArr) {
    // Invoke validation
    if (!validateInputArray(numArr))
        throw new Error("Input is invalid.")

    // do logic
    let uniqueElements = []

    numArr.forEach(n => {
        if (!uniqueElements.includes(n)) uniqueElements.push(n)
    })

    return [uniqueElements.length, sumUniqueElements(uniqueElements)]
}

function sumUniqueElements(uniqueArr) {
    // validation
    if (!validateInputArray(uniqueArr))
        throw new Error("Unique array should be valid.")

    // main logic
    return uniqueArr.reduce((prev, curr) => prev + curr, 0)
}

function validateInputArray(input) {
    // Basic validation
    if (!input) return false

    if (!Array.isArray(input)) return false
    
    if (input.length === 0) return false
    
    for (let n of input)
        if (typeof n !== "number")
            return false


    return true
}

function uniqueWithSet(numArr) {
    // validation
    if (!validateInputArray(numArr)) throw new Error()

    const uniqueSet = new Set()
    const anotherSet = [... new Set(numArr)]

    for (let n of numArr)
        uniqueSet.add(n)

    console.log(uniqueSet)
}


module.exports = { countUnique, sumUniqueElements, validateInputArray }