const TOTAL_WORLD_AREA = 148940000

function areaOfACountry(name, area) {
    // validation
    if (!area || !parseFloat(area) || isNaN(parseFloat(area)) || !name) {
        return ""
    }

    let perc = Number(area / TOTAL_WORLD_AREA * 100).toFixed(2)

    return `${name} is ${perc}% of the total world's landmass`
}

console.log(areaOfACountry("Russia", 17098242))
console.log(areaOfACountry("USA", 9372610))
console.log(areaOfACountry('Iran', 1648195))

// test rounding:
let numbers = [1.3345, 1.3350, 1.3351, 1.3355]

for (let n of numbers)
    console.log(n.toFixed(2))