const LinkedList = require('./ll-insertions');

it('should add water-melon after apples', () => {
  const ll = new LinkedList();
  ll.insert('bananas');
  ll.append('apples');
  ll.append('cucumbers');
  ll.insertAfter('apples', 'water-melon');
  expect(ll.head.value).toBe('bananas');
  console.log(ll.head.value);
  expect(ll.head.next.value).toBe('apples');
  console.log(ll.head.next.value);
  expect(ll.head.next.next.value).toBe('water-melon');
  expect(ll.head.next.next.next.value).toBe('cucumbers');
  expect(ll.head.next.next.next.next).toBe(undefined);
});

it('should add water-melon before apples', () => {
  const ll = new LinkedList();
  ll.insert('bananas');
  ll.append('apples');
  ll.append('cucumbers');
  ll.insertBefore('apples', 'water-melon');
  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('water-melon');
  expect(ll.head.next.next.value).toBe('apples');
  expect(ll.head.next.next.next.value).toBe('cucumbers');
  expect(ll.head.next.next.next.next).toBe(undefined);
});
