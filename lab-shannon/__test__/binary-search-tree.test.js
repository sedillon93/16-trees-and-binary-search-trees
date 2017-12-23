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
  tree.insert(23);
  tree.insert(27);

    test(`BST remove method should remove a node with the specified value and set its parent pointer to null if it has no children`, () => {
      tree.remove(3);
      expect(tree.root.left.left).toEqual(null);
    });
    test(`BST remove method should remove a node with the specified value and restructure the tree if the node has children`, () => {
      tree.remove(8);
      expect(tree.root.left.right.value).toEqual(6);
    });
    test.only(`BST remove method should remove a node with the specified value and restructure the tree if the node has children`, () => {
      tree.remove(21);
      expect(tree.root.right.value).toEqual(17);
      expect(tree.root.right.left.value).toEqual(13);
      expect(tree.root.right.right.value).toEqual(19);
      expect(tree.root.right.right.right.value).toEqual(23);
    });
})
