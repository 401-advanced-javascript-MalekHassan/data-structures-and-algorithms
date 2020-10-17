'use strict';

let array = [4, 8, 15, 23, 42];
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
      return 'the index is  ' + middle;
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
