'use strict';

let Queue = require(`./queue`);
let Stack = require(`./stack`);

function KAryTree(value){
  this.value = value;
  this._children = [];
}

KAryTree.prototype.appendChild = function(child){
  if(!(child instanceof KAryTree)){
    throw new TypeError(`The value to append must be a K-ary Tree`);
  }
  this._children.push(child);
};

KAryTree.prototype.find = function(value){   // breadth (queue)
  let queue = new Queue();
  queue.enqueue(this);
  let current = null;

  while(queue.length() > 0){
    current = queue.dequeue();
    if (current.value === value){
      return current;
    }
    for(let child of current._children){
      queue.enqueue(child);
    }
  }
  return null;
};
KAryTree.prototype.toString = function(str){    // breadth (queue)
  if(typeof str !== 'string'){
    throw new TypeError(`You must provide a string to concatenate values onto`);
  }
  let queue = new Queue();
  queue.enqueue(this);
  let current = null;

  while(queue.length() > 0){
    current = queue.dequeue();
    str += current.value + `\n`;

    for(let child of current._children){
      queue.enqueue(child);
    }
  }
  return str.trim();
};

KAryTree.prototype.toArray = function(array){     //depth (stack)
  if(typeof array !== 'object'){
    throw new TypeError(`You must provide an array to add elements to`);
  }
  let stack = new Stack();
  stack.push(this);
  let current = null;

  while(stack.length() > 0){
    current = stack.pop();
    array.push(current);

    for(let child of current._children){
      stack.push(child);
    }
  }
  return array;
};

module.exports = KAryTree;
