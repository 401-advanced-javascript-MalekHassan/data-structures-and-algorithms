'use strict';
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    //insert a new head node

    this.head = new Node(value, this.head);
    console.log('--------------------------');
  }

  append(value) {
    //insert a new node at the end of the list

    const newNode = new Node(value);

    if (!this.head) {
      //beginning a new list (no existing head)
      this.head = new Node(value);
      return;
    }
    // Create a while loop to find the end of the list
    let currentNode = this.head;
    // console.log('currentNode', currentNode);
    while (currentNode.next) {
      //checks for truthiness of currentNode.next - null will fail the test
      currentNode = currentNode.next;
    }
    // console.log('newNode  ', newNode);
    currentNode.next = newNode;
    console.log('--------------------------');
  }

  insertAfter(value, newVal) {
    const newNode = new Node(newVal);

    if (!this.head) {
      //beginning a new list (no existing head)
      this.head = new Node();
      return;
    }
    // Create a while loop to find the newVal of the list
    let currentNode = this.head;
    // console.log('currentNode in the after', currentNode);
    while (currentNode.value !== value) {
      //checks for truthiness of currentNode.next === newVal - false will fail the test
      currentNode = currentNode.next;
    }
    console.log(currentNode); // {2,{3,{4,{undefind}}}}
    // console.log('newNode in the after ', newNode); // {99,undifind}
    newNode.next = currentNode.next; //{99,{3,{4,{undefind}}}}
    currentNode.next = newNode; // {2,{99,{3,{4,{undefind}}}}
    // console.log('ssssssssss', this.head.next);
    // console.log('--------------------------');
  }

  insertBefore(value, newVal) {
    const newNode = new Node(newVal); //{99,undifind}

    if (!this.head) {
      //beginning a new list (no existing head)
      this.head = new Node(value);
      return;
    }
    // Create a while loop to find the newVal of the list
    let currentNode = this.head;
    // console.log('currentNode in the after', currentNode);
    while (currentNode.value !== value) {
      //checks for truthiness of currentNode.next === newVal - false will fail the test
      currentNode = currentNode.next;
    }
    // {2,{3,{4,{undifind}}}}
    let exactNode = new Node(value); //{2,undifind}
    exactNode.next = currentNode.next; // {3,{4,{undefind}}}}}
    currentNode.value = newNode.value; // {1,99{3,{4,{undefind}}}}}}
    // console.log('newNode in the after ', newNode);
    currentNode.next = exactNode;
    // console.log('ssssssssss', this.head.next);
    // console.log('--------------------------');
  }

  toString() {
    if (!this.head) {
      return 'NULL';
    }
    let currentNode = this.head;

    let stringOfValues = '';
    while (currentNode.next) {
      stringOfValues = `${stringOfValues}{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    console.log(`${stringOfValues}{ ${currentNode.value} } -> NULL`);
    return `${stringOfValues}{ ${currentNode.value} } -> NULL`;
  }
}
// let node = new LinkedList();
// node.insert(1);
// node.append(2);
// node.append(3);
// node.append(4);
// node.toString();
// node.insertBefore(2, 99);
// node.toString();
// // console.log(node.toString());
module.exports = LinkedList;
