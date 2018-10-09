const BinarySearchTree = require('./binaryTree');

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

const input = [3, 1, 4, 6, 9, 2, 5, 7];
const BST = new BinarySearchTree();
input.forEach(num => BST.insert(num));
// console.log(BST);

const findHeight = function(tree) {
  let currentNode = tree;
  let leftSide = 0;
  let rightSide = 0;

  if (currentNode.left === null && currentNode.right === null) {
    return 1;
  }
  if (currentNode.left !== null) {
    return (leftSide = 1 + findHeight(currentNode.left));
  }
  if (currentNode.right !== null) {
    return (rightSide = 1 + findHeight(currentNode.right));
  }
  return (height = leftSide >= rightSide ? leftSide : rightSide);
};
console.log(findHeight(BST));
