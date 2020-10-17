'use strict';

let array = [4, 8, 15, 42, 23];
let value = 15;

array.sort(function (a, b) {
  return a - b;
});
function binarySearch(arr, key) {
  let firstPlace = 0;
  let lastPlace = arr.length - 1;
  while (lastPlace >= firstPlace) {
    let middle = Math.floor((firstPlace + lastPlace) / 2);
    if (key === arr[middle]) {
      return middle;
    }
    if (key < arr[middle]) {
      lastPlace = middle - 1;
    } else {
      firstPlace = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch(array, value));
binarySearch(array, value);
describe('Testing challenge 3 array-binary-search', () => {
  test('It should return 2 for the index of 15 which is 2', () => {
    expect(binarySearch([4, 8, 15, 42, 23], 15)).toStrictEqual(2);
  });
});
