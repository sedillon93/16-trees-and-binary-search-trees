'use strict';

class Queue{
  constructor(){
    this.data = [];
  }

  enqueue(value){
    this.data.push(value);
  }

  dequeue(){
    return this.data.shift();
  }

  length(){
    return this.data.length();
  }
}

module.exports = Queue;
