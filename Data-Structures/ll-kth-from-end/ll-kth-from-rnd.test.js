const LinkedList = require('./ll-kth-from-end');

describe('testing for Kth method', () => {
  it('should give me bananas after asking for number 3', () => {
    const ll = new LinkedList();
    ll.insert('bananas');
    ll.append('apples');
    ll.append('cucumbers');
    ll.append('water-melon');
    expect(ll.ll_kth_from_end(3)).toBe('bananas');
  });
});
