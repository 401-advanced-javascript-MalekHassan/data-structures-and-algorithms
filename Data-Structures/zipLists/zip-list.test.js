const LinkedList = require('./zip-lists');

describe('testing for zip method', () => {
  it('should repeat each name twice directly after the first name fo it ', () => {
    let node = new LinkedList();
    node.insert(1);
    node.append(3);
    node.append(5);
    let node2 = new LinkedList();
    node2.insert(2);
    node2.append(4);
    node2.append(6);
    let x = node.zipLists(node, node2);
    console.log(x);
    expect(node.toString()).toBe(
      `{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL`
    );
  });
});
