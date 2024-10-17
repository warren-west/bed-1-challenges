export function possibleBonusV1(posA, posB) {

    // if you're on the same tile, or ahead of your friend, return false
    if (posB <= posA) return false

    // what is the furthest tile you could reach?
    let furthest = posA + 6

    if (furthest >= posB) // |  | | | a | | | b | | | furthest
        return true

    return false
}




export function possibleBonusV2(posA, posB) {
    if (posB <= posA) return false

    if (posB - posA <= 6) {
        return true
    }

    return false
}

export function possibleBonusDynamicDieSize(posA, posB, dieSides) {
    // validation (make sure our numbers are positive)
    if (posA < 0 || posB < 0 || dieSides < 1) return undefined

    if (posA > posB) return false

    if (posB - posA <= dieSides) return true

    return false
}