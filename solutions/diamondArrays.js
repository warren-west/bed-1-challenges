function createDiamondArray(num) {
    // initially, fill the array with the middle item
    const output = [new Array(num).fill(num)]

    // loop from num - 1
    // down to 1
    for (let i = num - 1; i >= 1; i--) {
        // create a new inner array
        const newArr = new Array(i).fill(i)

        // add the new array to the back and front of the output array
        output.push(newArr)
        output.unshift(newArr)
    }

    return output
}


function diamondArraysAlex(n) {
    return [...Array(2 * n - 1)].map((_, i) => {
        const size = i < n ? i + 1 : 2 * n - i - 1;
        return Array(size).fill(size); // creating the nested array
    });
}


function diamondArraysThomas(x) {
    const array = [];
    
    for (let index = 1; index <= x; index++) {
      const innerArray = new Array(index).fill(index);
  
      array.push(innerArray);
    }
    const array2 = [...array].slice(0, -1).reverse();
  
    return array.concat(array2);
  }

console.log(diamondArrays(1));
console.log(diamondArrays(2));
console.log(diamondArrays(5));

/*
  Intended results: 
  [[1]]
  [[1], [2, 2], [1]]
  [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]
*/

console.log(createDiamondArray(3))