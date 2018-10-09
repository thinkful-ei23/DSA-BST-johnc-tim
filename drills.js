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

const input = [3, 1, 4, 6, 9, 2, 5, 7, 8];
const BST = new BinarySearchTree();
input.forEach(num => BST.insert(num));
console.log(BST);

function height(searchTree) {
  //base case
  if (!searchTree || !searchTree.key) {
    return 0;
  }

  const leftDepth = height(searchTree.left);
  const rightDepth = height(searchTree.right);

  return 1 + (leftDepth > rightDepth ? leftDepth : rightDepth);
}

console.log(height(BST));
// const findHeight = function(tree) {
//   let currentNode = tree;
//   let leftSide = 0;
//   let rightSide = 0;

//   if (currentNode.left === null && currentNode.right === null) {
//     return 1;
//   }
//   if (currentNode.left !== null) {
//     leftSide = 1 + findHeight(currentNode.left);
//   }
//   if (currentNode.right !== null) {
//     rightSide = 1 + findHeight(currentNode.right);
//   }
//   return (height = leftSide >= rightSide ? leftSide : rightSide);
// };
// console.log(findHeight(BST));
