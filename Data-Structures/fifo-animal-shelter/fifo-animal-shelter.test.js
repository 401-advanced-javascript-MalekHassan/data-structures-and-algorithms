'use strict';
const { AnimalShelter } = require('./fifo-animal-shelter');
describe('AnimalShelter tests', () => {
  it('1- can successfully push onto a queue', () => {
    const ll = new AnimalShelter();
    ll.enqueue('Dog');
    expect(ll.data.front.value).toBe('Dog');
  });
  it('2- can return a specific value when dequeuing for an empty queue ', () => {
    const ll = new AnimalShelter();
    expect(ll.dequeue('Dog')).toBe('Enter a queue Please!');
  });
  it('3- can not successfully push onto a queue', () => {
    const ll = new AnimalShelter();
    expect(ll.enqueue('coco')).toBe('Enter a valid data');
  });
  it('4- can dequeue successfully and return the dequeued value and the counter of it in the queue ', () => {
    const ll = new AnimalShelter();
    ll.enqueue('Dog');
    ll.enqueue('Cat');
    expect(ll.dequeue('Cat')[0]).toBe('Cat');
    expect(ll.dequeue('Cat')[1]).toBe(1);
  });
});
