'use strict';
class Node {
  constructor(value, next) {
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
    return this;
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

  ll_kth_from_end(value) {
    const newNode = new Node(value);
    let arr = [];
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    arr.push(currentNode.value);
    currentNode.next = newNode;
    console.log(arr);
    let mm = arr.reverse();
    // console.log(mm);
    for (let index = 0; index <= mm.length; index++) {
      // console.log(index, value);
      if (index === value) {
        mm[index];
        return arr[index];
      } else if (index === mm.length) {
        return 'Exception';
      }
    }
  }

  zipLists(list1, list2) {
    //     console.log('hkjhljjlkjl', node);
    //     console.log(this.head);
    let arr1 = [];
    let arr2 = [];
    let currentNode1 = list1.head;
    while (currentNode1.next) {
      arr1.push(currentNode1.value);
      currentNode1 = currentNode1.next;
    }
    arr1.push(currentNode1.value);
    //     console.log(arr1);
    let currentNode2 = list2.head;
    while (currentNode2.next) {
      arr2.push(currentNode2.value);
      currentNode2 = currentNode2.next;
    }
    arr2.push(currentNode2.value);
    //     console.log(arr2);
    for (let index = 0; index < arr2.length; index++) {
      list1.insertAfter(arr1[index], arr2[index]);
    }
    //     console.log('this', list1);
    return list1;
  }
}
// let node = new LinkedList();
// node.insert(1); //6
// node.append(3); //5
// node.append(5);
// let list1 = node.append(7);
// let node2 = new LinkedList();
// node2.insert(2); //6
// node2.append(4); //5
// node2.append(6);
// let list2 = node2.append(8);
// node.toString();
// let x = node.ll_kth_from_end(3);
// node.insertBefore(2, 99);
// let x = node.zipLists(list1, list2);
// node.toString();

module.exports = LinkedList;
