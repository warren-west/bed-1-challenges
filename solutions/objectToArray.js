function objectToArray(object) {

    let outerArray = [] // initialize the return array

    for (let key in object) {
        // add a new child array into the outer array
        // the contents of the child array are: [key, value]
        outerArray.push([key, object[key]])
    }

    // return the outer array, populated with child arrays
    return outerArray
}

// console.log(objectToArray({ a: 1, b: 2 })) // Expected result = [ [a,1] , [b,2] ]
console.log(objectToArray({ a:1, b:2, c:3, d:4 }))
console.log(objectToArray({}))