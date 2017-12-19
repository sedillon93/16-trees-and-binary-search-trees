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
  console.log(this);
  this._children.push(child);
};

KAryTree.prototype.find = function(value){   // breadth (queue)

};
KAryTree.prototype.toString = function(str){    // breadth (queue)

};
KAryTree.prototype.toArray = function(array){     //depth (stack)

};

module.exports = KAryTree;
