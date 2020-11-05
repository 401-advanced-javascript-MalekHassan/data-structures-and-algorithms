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
  fuzz_buzz() {
    if (!this.root) {
      throw new RangeError('Tree is empty!');
    }
    let strarray = [];
    const arr = [];
    const queue = [];
    let newtree = this.root;
    queue.push(newtree);
    while (queue.length) {
      let front = queue.shift();
      arr.push(front.value);
      if (front.value % 3 === 0 && front.value % 5 === 0) {
        front.value = 'fizz-buzz';
      } else if (front.value % 3 === 0) {
        front.value = 'fizz';
      } else if (front.value % 5 === 0) {
        front.value = 'buzz';
      } else {
        let k = front.value;
        front.value = k.toString();
      }
      // console.log(arr);
      if (front.left) {
        queue.push(front.left);
      }

      if (front.right) {
        queue.push(front.right);
      }
    }
    arr.forEach((num) => {
      if (num % 3 === 0 && num % 5 === 0) {
        strarray.push('fuzz-buzz');
      } else if (num % 3 === 0) {
        strarray.push('fuzz');
      } else if (num % 5 === 0) {
        strarray.push('buzz');
      } else {
        let k = num.toString();
        strarray.push(k);
      }
    });
    console.log(strarray);
    return newtree;
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
treey.add(15);
treey.add(7);
treey.add(14);
treey.add(3);
treey.add(9);
treey.add(4);
treey.add(5);
console.log(treey.fuzz_buzz());

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};
