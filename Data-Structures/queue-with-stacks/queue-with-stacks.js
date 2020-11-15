'use strict';
const { Stack } = require('../stacksAndQueues/stacks-and-queues');
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class PseudoQueue {
  constructor(push, pop) {
    this.data = new Stack();
  }
  enqueue(value) {
    this.data.push(value);
    return this;
  }
  dequeue() {
    if (!this.data.top) {
      return 'enter a Stack to start';
    }
    // console.log('hhhiiiii', this);
    let currentNode = this.data.top;
    let arr = [];
    // console.log('asssa', currentNode.top);
    while (currentNode) {
      // console.log('aaaaaaaaaaaaaa', currentNode);
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    this.data = new Stack();
    let t = arr.length;
    let a;
    // console.log(arr);
    for (let index = arr.length - 1; index >= 0; index--) {
      a = arr[t - 1];
      if (index < arr.length - 1) {
        this.data.push(arr[index]);
        // console.log(arr[index]);
      }
    }
    console.log(a);
    return a;
  }
}
// let pes = new PseudoQueue();

// pes.enqueue(1);
// pes.enqueue(2);
// pes.enqueue(3);
// pes.enqueue(5);
// pes.enqueue(88);
// pes.dequeue();
// pes.dequeue();
// console.log(pes.data.top);

module.exports = { Node, PseudoQueue };
