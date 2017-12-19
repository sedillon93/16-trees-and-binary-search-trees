'use strict';

class Stack{
  constructor(){
    this.data = [];
  }

  push(value){
    this.data.push(value);
  }

  pop(){
    return this.data.pop();
  }
}

module.exports = Stack;
