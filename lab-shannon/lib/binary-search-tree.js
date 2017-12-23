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
}

  insert(value){
    if(root === null){
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
    if(this.value < value){
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
    return this._remove(node, value);
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
      else if(node.left || node.right){}
      else{}
    }
    else if(node.value > value){
      if(node.left.value){
        return this._remove(node.left, value, node)
      }
      return null;
    }
    else if(node.value > value){
      if(node.right.value){
        return this._remove(node.right, value, node)
      }
      return null;
    }
  }
  //   if(this.value === value){
  //     if(this.left && this.right){
  //       let newRoot = _findBiggest(this.left);
  //     }
  //   }
  //   if(this.value > value){
  //     if(this.left.value === value){
  //       if(this.left.left && this.left.right){
  //         this = _findBiggest(this.left);
  //       }
  //       else if(this.left.left){
  //         this.left = this.left.left;
  //         return;
  //       }
  //       else if(this.left.right){
  //         this.left = this.left.right;
  //       }
  //       else{
  //         this.left = null;
  //       }
  //     }
  //     else if(this.left){
  //       this.left.remove(value);
  //       return;
  //     }
  //     else {
  //       return null;
  //     }
  //   }
  //   if(this.value < value){
  //     if(this.right.value === value){
  //       // if(this.right.left && this.left.left){
  //       //   this.right = _findSmallest(this.right);
  //       // }
  //       else if(this.right.left){
  //         this.right = this.right.left;
  //       }
  //       else if(this.right.right){
  //         this.right = this.right.right;
  //       }
  //       else{
  //         this.right = null;
  //       }
  //     }
  //     else if(this.right){
  //       this.right.remove(value);
  //     }
  //     else{
  //       return null;
  //     }
  //   }
}
