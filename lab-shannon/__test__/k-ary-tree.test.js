'use strict';

const KAryTree = require(`../lib/k-ary-tree`);

describe(`K-Ary Tree`, () => {
  describe(`find method`, () => {
    test(`find method should return the first node matching the specified value if no errors are present`, () => {
      let four = new KAryTree(4);
      let three = new KAryTree(3);
      let seven = new KAryTree(7);
      let fifteen = new KAryTree(15);
      let two = new KAryTree(2);
      let nine = new KAryTree(9);

      four.appendChild(three);
      three.appendChild(seven);
      three.appendChild(fifteen);
      three.appendChild(two);
      two.appendChild(nine);

      expect(four.find(7).value).toEqual(7);
    });

    test(`find method should return null if there is no node with the specified value`, () => {
      let four = new KAryTree(4);
      let three = new KAryTree(3);
      let seven = new KAryTree(7);
      let fifteen = new KAryTree(15);
      let two = new KAryTree(2);
      let nine = new KAryTree(9);

      four.appendChild(three);
      three.appendChild(seven);
      three.appendChild(fifteen);
      three.appendChild(two);
      two.appendChild(nine);

      expect(three.find(11)).toBeNull();
    });
  });

  describe(`toString method`, () => {
    test(`toString method should return a string of all the node values separated by newlines`, () => {
      let four = new KAryTree(4);
      let three = new KAryTree(3);
      let seven = new KAryTree(7);
      let fifteen = new KAryTree(15);
      let two = new KAryTree(2);
      let nine = new KAryTree(9);

      four.appendChild(three);
      three.appendChild(seven);
      three.appendChild(fifteen);
      three.appendChild(two);
      two.appendChild(nine);

      expect(four.toString('Hello: ')).toEqual(`Hello: 4\n3\n7\n15\n2\n9`);
    });

    test(`toString method should throw an error if passed an argument other than a string`, () => {
      expect(() => {
        three.toString(24).toThrow();
      });
    });
  });

  describe(`toArray method`, () => {
    test(`toArray method should return an array of all elements if there are no errors`, () => {
      let four = new KAryTree(4);
      let three = new KAryTree(3);
      let seven = new KAryTree(7);
      let fifteen = new KAryTree(15);
      let two = new KAryTree(2);
      let nine = new KAryTree(9);

      four.appendChild(three);
      three.appendChild(seven);
      three.appendChild(fifteen);
      three.appendChild(two);
      fifteen.appendChild(nine);

      expect(four.toArray([])[0].value).toEqual(4);
      expect(four.toArray([])[1].value).toEqual(3);
      expect(four.toArray([])[2].value).toEqual(2);
      expect(four.toArray([])[3].value).toEqual(15);
      expect(four.toArray([])[4].value).toEqual(9);
      expect(four.toArray([])[5].value).toEqual(7);
    });

    test(`toArray method should throw a Type Error if the argument provided is not an object (i.e. array)`, () => {
      expect(() => {
        three.toArray(ahdsjl).toThrow();
      });
    });
  });
});
