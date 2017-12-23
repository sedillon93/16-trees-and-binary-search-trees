'use strict';

const BinarySearchTree = require(`../lib/binary-search-tree`);

describe(`Binary Search Tree`, () => {
  let tree = new BinarySearchTree();
  tree.insert(9);
  tree.insert(4);
  tree.insert(17);
  tree.insert(3);
  tree.insert(8);
  tree.insert(13);
  tree.insert(21);
  tree.insert(19);
  tree.insert(6);

    test.only(`BST remove method should remove a node with the specified value and restructure the tree if necessary if there are no errors`, () => {
      tree.remove(3);
      expect(tree.root.left.left).toEqual(null);
    });
    test(`BST remove method should remove a node with the specified value and restructure the tree if necessary if there are no errors`, () => {
      tree.remove(8);
      console.log(tree);
      expect(tree.root.left.right).toEqual(null);
    });
})
