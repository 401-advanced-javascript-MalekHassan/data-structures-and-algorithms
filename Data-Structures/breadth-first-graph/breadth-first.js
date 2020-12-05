'use strict';

const {
  Graph,
} = require('/mnt/c/Users/Dell/projects/401/data-structures-and-algorithms/Data-Structures/graph/graph.js');
const {
  Queue,
} = require('/mnt/c/Users/Dell/projects/401/data-structures-and-algorithms/Data-Structures/stacksAndQueues/stacks-and-queues.js');

class BreadthFirstGraph extends Graph {
  constructor() {
    super();
  }

  breadthFirst(start) {
    const graph = new Set();
    let queue = new Queue();
    let visited = [];
    queue.enqueue(start);

    while (queue.length) {
      let front = queue.dequeue();
      visited.push(start.value);
      graph.add(front);
      this.edges[front.value].forEach((vertex) => {
        console.log('vertex: ', vertex);
        if (!visited.includes(vertex)) {
          visited.push(vertex.value);
          queue.enqueue(vertex);
        }
      });
    }
    return visited;
  }
}

module.exports = BreadthFirstGraph;
