'use strict';

class TreeNode{
  constructor(value, left, right){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(value){
    if(this.root === null){
      this.root = new TreeNode(value);
    }
    else{
      this._insert(this.root, value);
    }
  }
  _insert(node, value){
    if(typeof value !== 'number'){
      throw new TypeError(`You can only insert numbers`);
    }
    if(node.value === value){
      throw new TypeError(`That value is already present; You cannot create duplicate numbers`);
    }
    if(node.value > value){
      if(!node.left){
        node.left = new TreeNode(value);
        return;
      }
      this._insert(node.left, value);
      return;
    }
    if(node.value < value){
      if(!node.right){
        node.right = new TreeNode(value);
        return;
      }
      this._insert(node.right, value);
      return;
    }
  }

  find(value){
    return this._find(this.root, value);
  }

  _find(node, value){
    if(!node){
      return null;
    }
    else if(node.value === value){
      return node;
    }
    else if(node.value > value){
      return node.left._find(value);
    }
    else if(node.value < value){
      return node.right._find(value);
    }
  }

  _findBiggest(node){
    if(node.right){
      _findBiggest(node.right);
    }
    else if(!node.right){
      return node;
    }
  }

  remove(value){
    return this._remove(this.root, value);
  }

  _remove(node, value, parent){
    if(!node){
      return null;
    }
    else if(node.value === value){
      if(node.left && node.right){
        node.value = this._findBiggest(node.left);  // this copies the value of the smallest node on the left branch and assigns it as the new value of the 'deleted' node
        this._remove(node.left, node.value);    // this finds the duplicate value and deletes it
      }
      else if(node.left){
        if(parent.right === value){
          parent.right = node.left;
        }
        else if(parent.left === value){
          parent.left = node.left;
        }
      }
      else if(node.right){
        if(parent.right === value){
          parent.right = node.right;
        }
        else if(parent.left === value){
          parent.left = node.right;
        }
      }
      else{
        if(parent.left === value){
          parent.left = null;
        }
        else if(parent.right === value){
          parent.right = null;
        }
      }
    }
    else if(node.value > value){
      if(node.left.value){
        this._remove(node.left, value, node)
      }
      return null;
    }
    else if(node.value > value){
      if(node.right.value){
        this._remove(node.right, value, node)
      }
      return null;
    }
  }
}

module.exports = BinarySearchTree;
