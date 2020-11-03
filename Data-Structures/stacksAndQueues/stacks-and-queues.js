class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    if (this.isEmpty()) {
      let node = new Node(value); //{3,null}
      // let node = new Node(value);
      this.top = node;
      return this;
    }
    let g = this.top;
    this.top = new Node(value, g);
    return this;
  }
  pop() {
    // console.log(this.top.next);
    // console.log(this.top.value);
    if (this.isEmpty()) {
      return 'exception';
    }
    // console.log(this.top.value);
    let remove = this.top.value;
    let f = this.top.next;
    this.top = f;
    return remove;
  }
  peek() {
    if (this.isEmpty()) {
      return 'exception';
    }
    let top = this.top.value;
    return top;
  }
  isEmpty() {
    if (!this.top) {
      return true;
    } else if (this.top.value) {
      return false;
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  enqueue(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.front = node;
      this.back = node;
      return this;
    }
    let curruntNode = this.front;
    while (curruntNode.next) {
      curruntNode = curruntNode.next;
    }
    curruntNode.next = node;
    this.back = node;
    // console.log(curruntNode);
    return this;
  }
  dequeue() {
    // if (this.isEmpty()) {
    //   return 'exception';
    // }
    let remove = this.front.value;
    this.front = this.front.next;
    // let up = this.front.next;
    // this.front.value = up;
    // this.front = up;
    // console.log('jaja', remove);
    return remove;
  }
  peek() {
    if (this.isEmpty()) {
      return 'exception';
    }
    return this.front.value;
  }
  isEmpty() {
    if (!this.front) {
      return true;
    } else if (this.front.value) {
      return false;
    }
  }
}

// let stacky = new Stack();
// stacky.push(1);
// stacky.push(2);
// stacky.push(3);
// stacky.push(4);
// stacky.push(15);
// stacky.pop();
// stacky.pop();
// console.log(stacky);

// let queuey = new Queue();

// queuey.enqueue(1);
// queuey.enqueue(2);
// queuey.enqueue(3);
// queuey.enqueue(4);
// queuey.dequeue();

// console.log(queuey.dequeue());
module.exports = { Stack, Queue };
