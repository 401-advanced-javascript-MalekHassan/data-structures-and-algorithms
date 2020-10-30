'use strict';
const { PseudoQueue } = require('./queue-with-stacks');
describe('PseudoQueue tests', () => {
  it('1- can successfully push onto a stack', () => {
    const ll = new PseudoQueue();
    ll.enqueue('Crono');
    expect(ll.data.top.value).toBe('Crono');
  });
  it('2- can return a specific value when dequeuing for an empty stack ', () => {
    const ll = new PseudoQueue();
    expect(ll.dequeue('coco')).toBe('enter a Stack to start');
  });
});
