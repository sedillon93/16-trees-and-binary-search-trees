## Purpose
This program has two parts: a binary search tree implementation and a k-ary tree implementation.

## How To Use

1. Run 'npm install' to install all dependencies
2. Run 'npm i --save jest' to save jest for testing purposes
3. To test all functions run 'npm test'

## Methods
1. Binary Search Tree
  * remove(value): The remove method is used to delete a node with a particular value from the BST and restructure the tree if necessary to maintain proper sorting. If no node is found with the specified value null is returned. The value provided is recommended to be a numeric value to ensure proper sorting.

2. K-Ary Tree
  * find(value): The find method searches the tree for a node with the specified value. If a match is found, the node is returned. If no match is found, null is returned.
  * toString(baseString): The toString method traverses the entire tree breadth-first and adds all of the node values to the base string. Once the entire tree has been traversed the finished string is returned. If no baseString is provided, or it is not a String, an error will occur.
  * toArray(baseArray): The toArray method traverses the entire tree depth-first and adds all of the nodes to the base array. Once the entire tree has been traversed the finished array is returned. If no baseArray is provided, or it is not an Array/Object, an error will occur.

## Technologies Used
* ES6
* node
* jest
* eslint

## License
MIT

## Credits
* Vinicio Vladimir Sanchez Trejo & the Code Fellows curriculum provided the base .eslintrc, .eslintignore, and .gitignore files.

* My fellow 401JS classmates and the instructional staff for help problem solving and debugging.
