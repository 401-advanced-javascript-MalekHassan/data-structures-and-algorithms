# Trees

## Problem Domain

- Write a function called FizzBuzzTree which takes a k-ary tree as an argument.
  Without utilizing any of the built-in methods available to your language, determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:

* If the value is divisible by 3, replace the value with “Fizz”
* If the value is divisible by 5, replace the value with “Buzz”
* If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
* If the value is not divisible by 3 or 5, simply turn the number into a String.

## Challenge

Create a `Node` class that has properties for the value stored in the node, the left child node, and the right child node.

Create a `BinaryTree` class, and define a method for each of the depth first traversals called `preOrder`, `inOrder`, and `postOrder` which returns an array of the values, ordered appropriately.

Create a `BinarySearchTree` class, and define a method named `add` that accepts a value, and adds a new node with that value in the correct location in the binary search tree.

Define a method named `contains` that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

See below for further information on method functionality.

## Approach & Efficiency

### Big O Time:

#### Binary Tree

- `preOrder()`: O(n)
- `inOrder()`: O(n)
- `postOrder()`: O(n)
- `findMaximumValue()`: O(n)
- `fuzz_buzz()` : o(n)

#### Binary Search Tree

- `add()`: O(n)
- `contains()`: O(n)

### Big O Space:

#### Binary Tree

- `preOrder()`: O(1)
- `inOrder()`: O(1)
- `postOrder()`: O(1)
- `findMaximumValue()`: O(1)
- `fuzz_buzz()` : o(1)

#### Binary Search Tree

- `add()`: O(1)
- `contains()`: O(1)

## API

### Available Methods

#### Binary Tree

- `preOrder()`: A depth-first traversal method for a binary tree that searches/prints an array of tree values as such: `root >> left >> right`.

- `inOrder()`: A depth-first traversal method for a binary tree that searches/prints an array of tree values as such: `left >> root >> right`.

* `postOrder()`: A depth-first traversal method for a binary tree that searches/prints an array of tree values as such: `left >> right >> root`.

* `findMaximumValue()`: Takes no argument, and returns the maximum numeric value stored in the tree.

* `fuzz_buzz()` : Takes a tree and check each value of the tre if it is can be divided on 3 replace the value with `Fizz` and if it can be divided on 5 replace the value with `buzz` and if can be divided on both replace the value with `fuzz-buzz` and if it is not makes the value type as string

#### Binary Search Tree

- `add(value)`: Accepts a value, and adds a new node with that value in the correct location in the binary search tree.

- `contains(value)`: Accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
