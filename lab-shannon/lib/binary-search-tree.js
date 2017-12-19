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
}
