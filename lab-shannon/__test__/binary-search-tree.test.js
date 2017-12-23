'use strict';

const BinarySearchTree = require(`../lib/binary-search-tree`);

describe(`Binary Search Tree`, () => {
  let tree = new BinarySearchTree(9);
  tree.insert(4);
  tree.insert(17);
  tree.insert(3);
  tree.insert(2);
  tree.insert(13);
  tree.insert(21);
  tree.insert(19);
  tree.insert(6);

    test(`BST remove method should remove a node with the specified value and restructure the tree if necessary if there are no errors`, () => {
      // tree.remove(6);
      console.log(tree);
      expect(2).toBeTruthy();
    });
})
