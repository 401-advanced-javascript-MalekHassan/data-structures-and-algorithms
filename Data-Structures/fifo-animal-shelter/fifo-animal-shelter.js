const { Queue } = require('../stacksAndQueues/stacks-and-queues');
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class AnimalShelter {
  constructor() {
    this.data = new Queue();
  }
  enqueue(value) {
    if (
      value === 'Dog' ||
      value === 'Cat' ||
      value === 'cat' ||
      value === 'dog'
    ) {
      this.data.enqueue(value);
      return this;
    } else {
      return 'Enter a valid data';
    }
  }
  dequeue(name) {
    if (!this.data.front) {
      return 'Enter a queue Please!';
    }

    let count = 0; //for checking purposes in the logs
    let curruntNode = this.data.front;
    console.log(name);
    if (name !== 'dog' && name !== 'Cat' && name !== 'cat' && name !== 'Dog') {
      return null;
    }
    while (curruntNode.value !== name) {
      count++;
      curruntNode = curruntNode.next;
    }

    return [curruntNode.value, count];
  }
}
module.exports = { Node, AnimalShelter };

let ani = new AnimalShelter();

ani.enqueue('Cat');
ani.enqueue('Cat');
ani.enqueue('Cat');
ani.enqueue('dog');
console.log(ani.dequeue('Cat')[0]);
console.log(ani.dequeue('dog'));
console.log(ani.dequeue('nn'));
