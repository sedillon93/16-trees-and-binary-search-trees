'use strict';

class BinarySearchTree{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value){
    if(typeof value !== 'number'){
      throw new TypeError(`You can only insert numbers`);
    }
    if(this.value === value){
      throw new TypeError(`That value is already present; You cannot create duplicate numbers`);
    }
    if(this.value > value){
      if(!this.left){
        this.left = new BinarySearchTree(value);
        return;
      }
      this.left.insert(value);
      return;
    }
    if(this.value < value){
      if(!this.right){
        this.right = new BinarySearchTree(value);
        return;
      }
      this.right.insert(value);
      return;
    }
  }

  find(value){
    if(this.value === value){
      return this;
    }
    else if(this.value > value){
      if(this.left){
        return this.left.find(value);
      }
      return null;
    }
    else if(this.value < value){
      if(this.right){
        return this.right.find(value);
      }
      return null;
    }
  }

  remove(value){
    //remove the specified value while maintaining the BST structure
    if(this.value > value){
      if(this.left.value === value){
        if(this.left.left && this.left.right){
          // need to restructure the tree
        }
        else if(this.left.left){
          this.left = this.left.left;
          return;
        }
        else if(this.left.right){
          this.left = this.left.right;
        }
        else{
          this.left = null;
        }
      }
      else if(this.left){
        this.left.remove(value);
        return;
      }
      else {
        return null;
      }
    }
    if(this.value < value){
      if(this.right.value === value){
        if(this.right.left && this.left.left){
          // need to restructure tree
        }
        else if(this.right.left){
          this.right = this.right.left;
        }
        else if(this.right.right){
          this.right = this.right.right;
        }
        else{
          this.right = null;
        }
      }
      else if(this.right){
        this.right.remove(value);
      }
      else{
        return null;
      }
    }
  }
}
