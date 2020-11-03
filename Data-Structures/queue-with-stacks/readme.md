# Stacks and Queues

## Challenge

Create a `Node` class that has properties for the value stored in the Node, and a pointer to the next node.

Create a `Stack` class that has a top property. It creates an empty Stack when instantiated. Write the following methods for the Stack class: `push()`, `pop()`, `peek()`, `isEmpty()`. See below for further information on method functionality.

Create a `PseudoQueue` class. It creates an empty Queue when instantiated. Write the following methods for the Queue class: `enqueue()`, `dequeue()`, using the methods of `push()`, `pop()` in stack page. See below for further information on method functionality.

## Approach & Efficiency

### Big O Time:

#### PseudoQueue

- `enqueue()`: O(1)
- `dequeue()`: O(1)

## API

### Available Methods

#### PseudoQueue

- `enqueue(value)`: Takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance,using the `push()` method in the Stack class

- `dequeue()`: Does not take any argument, removes the node from the end of the stack,using the `pop()` method in the stack class, and returns the node’s value. Raises an exception when called on an empty queue.
