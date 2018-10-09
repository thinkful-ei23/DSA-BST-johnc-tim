const BinarySearchTree = require('./binaryTree')

//drawing

    //     3
    // 1       4
    //   2        6
    //         5     9
    //             7
//drawing #2
        //     4
        // 1       6
        //   2   5    9
        //          7   

function main(){

    const input = [3,1,4,6,9,2,5,7]
    const BST = new BinarySearchTree
    input.forEach(num => BST.insert(num))
    console.log(BST)
}

main()