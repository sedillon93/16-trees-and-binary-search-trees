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
}

module.exports = Queue;
