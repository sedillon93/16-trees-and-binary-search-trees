'use strict';

function KAryTree(value){
  this.value = value;
  this.children = [];

}

KAryTree.prototype.appendChild = (child) => {
  if(!(child instanceof KAryTree)){
    throw new TypeError(`The value to append must be a K-ary Tree`);
  }

  this.children.push(child);
}

KAryTree.prototype.breadthSearch = (value) => {
  
}

find(value) // breadth
toString(str) // breadth
toArray(array)  //depth
