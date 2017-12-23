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
      this.left._insert(node.left, value);
      return;
    }
    if(this.value < value){
      if(!node.right){
        node.right = new TreeNode(value);
        return;
      }
      this.right._insert(node.right, value);
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
      return this;
    }
    else if(node.value > value){
      return this.left._find(value);
    }
    else if(node.value < value){
      return this.right._find(value);
    }
  }

  // _findSmallest(node){
  //   if(node.left){
  //     _findSmallest(node.left);
  //   }
  //   else if(!node.left){
  //     return node;
  //   }
  // }

  _findBiggest(node){
    if(node.right){
      _findBiggest(node.right);
    }
    else if(!node.right){
      return node;
    }
  }

  remove(value){
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
}
