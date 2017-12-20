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
  console.log(str.trim());
  return str.trim();
};
KAryTree.prototype.toArray = function(array){     //depth (stack)

};

module.exports = KAryTree;
