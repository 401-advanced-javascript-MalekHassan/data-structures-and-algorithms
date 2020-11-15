'use strict';
const { BinarySearchTree } = require('./find-maximum-binary-tree');
describe('Maximum tests', () => {
  it('1- can successfully find the max value in the tree', () => {
    const kk = new BinarySearchTree();
    kk.add(1);
    kk.add(3);
    kk.add(8);
    kk.add(15);
    kk.add(4);
    expect(kk.findMaximumValue()).toBe(15);
  });
});
