import { validateArray } from "./validateInput.js"

export function jackpot(slotArray) {
    if (!validateArray(slotArray)) {
        return -1
    }

    // loop through each element, except the last one
    for (let i = 0; i < slotArray.length - 1; i++) {

        // console.log(i)
        // console.log(slotArray[i])

        if (slotArray[i] !== slotArray[i + 1]) {
            // console.log(`${slotArray[i]} === ${slotArray[i+1]}`)
            return false
        }
    }

    return true
}

export function jackpotV2(slotArray) {
    myArray.every((element) => element === slotArray[0])
}

export function jackpotV3(slotArray) {
    let filteredArray = slotArray.filter((element) => {
        element === slotArray[0]
    })

    return filteredArray.length === 4
}

export function jackpotV4(slotArray) {
    slotArray.forEach((element) => {
        if (element !== slotArray[0])
            return false
    })

    return true
}