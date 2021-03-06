'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    const output = [];

    function _preOrder(root) {
      if (!root) {
        return;
      }
      output.push(root.value);
      _preOrder(root.left);
      _preOrder(root.right);
    }

    _preOrder(this.root);

    return output;
  }

  inOrder() {
    const output = [];

    function _inOrder(root) {
      if (!root) {
        return;
      }
      _inOrder(root.left);
      output.push(root.value);
      _inOrder(root.right);
    }

    _inOrder(this.root);

    return output;
  }

  postOrder() {
    const output = [];

    function _postOrder(root) {
      if (!root) {
        return;
      }
      _postOrder(root.left);
      _postOrder(root.right);
      output.push(root.value);
    }

    _postOrder(this.root);

    return output;
  }

  findMaximumValue() {
    if (!this.root) {
      throw new RangeError('Tree is empty!');
    }

    let max = this.root.value;

    function _findMaximumValue(root) {
      if (!root) {
        return;
      }

      if (root.value > max) {
        max = root.value;
      }

      _findMaximumValue(root.left);
      _findMaximumValue(root.right);
    }

    _findMaximumValue(this.root);
    return max;
  }

  breadth() {
    if (!this.root) {
      throw new RangeError('Tree is empty!');
    }

    const arr = [];
    const queue = [];

    if (!this.root) {
      throw new RangeError('Tree is empty!');
    }

    queue.push(this.root);
    while (queue.length) {
      let front = queue.shift();
      arr.push(front.value);
      // console.log(arr);
      if (front.left) {
        queue.push(front.left);
      }

      if (front.right) {
        queue.push(front.right);
      }
    }

    return arr;
  }
}

// Create a BinarySearchTree class
class BinarySearchTree extends BinaryTree {
  add(value) {
    // accepts a value, and adds a new node with that value in the correct location in the binary search tree

    let nodeToAdd = new Node(value);
    let currentNode = this.root;
    if (nodeToAdd.value === currentNode) {
      throw new RangeError('Values must be unique!');
    }

    if (!this.root) {
      this.root = nodeToAdd;
    } else {
      _add(nodeToAdd, currentNode);
    }

    function _add(nodeToAdd, currentNode) {
      while (currentNode.value !== nodeToAdd.value) {
        if (nodeToAdd.value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = nodeToAdd;
            return;
          } else {
            currentNode = currentNode.left;
            _add(nodeToAdd, currentNode);
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = nodeToAdd;
            return;
          } else {
            currentNode = currentNode.right;
            _add(nodeToAdd, currentNode);
          }
        }
      }
    }
  }

  contains(value) {
    // accept a value, and returns a boolean indicating whether or not the value is in the tree at least once
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}
let treey = new BinarySearchTree();

treey.add(5); //[2,7,5,9,6,11,4]
treey.add(7);
treey.add(2);
// treey.add(2);
treey.add(6);
treey.add(9);
treey.add(4);
// treey.add(5);
treey.add(11);
console.log(treey.breadth());
console.log(treey.root.right);

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};
