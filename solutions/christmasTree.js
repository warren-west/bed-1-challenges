function tree(height) {
    height = parseInt(height)

    // basic validation
    if (height < 1 || isNaN(height)) return []

    // star at the top of the tree
    let output = []

    for (let i = 1; i <= height; i++) {
        let firstHalf = ''

        for (let j = 0; j < height - i; j++) {
            firstHalf += ' '
        }

        for (let k = 0; k < i; k++) {
            firstHalf += '#'
        }

        let secondHalf = firstHalf.slice(0, height - 1).split('').reverse().join('')
        // console.log(firstHalf + secondHalf)
        output.push(firstHalf + secondHalf)
    }
    // add trunk
    if (height > 2) {
        addTrunk(output, height)
    }

    return output
}

function addTrunk(tree, height) {
    let trunk = Array(height * 2 - 1).fill(' ')
    trunk[height - 1] = '8'
    tree.push(trunk.join(''))
}

// console.log(tree(1))
// console.log(tree(2))
// console.log(tree(5))

// h=5
//        12345
//  1    '    #    '      3  ->                                                                           
//  2    '   ###   '                                                                                
//  3    '  #####  '                                                                                
//  4    ' ####### '                                                                                
//  5    '#########'                                                                                

let height = 5
let output = []

for (let i = 1; i <= height; i++) {
    // i = 1, 2, 3, 4, 5
    let treeLeft = ''

    // first (' 's)
    for (j = 0; j < height - i; j++) {
        treeLeft += ' '
    }

    // second part (#s)
    for (k = 0; k < i; k++) {
        treeLeft += '#'
    }

    //            12345
    // buildTree "    #"
    let treeRight = treeLeft.slice(0, height - 1).split('').reverse().join('')
    output.push(treeLeft + treeRight)
}

console.log(output)


[
    '    #    ',
    '   ###   ',
    '  #####  ',
    ' ####### ',
    '#########'
]