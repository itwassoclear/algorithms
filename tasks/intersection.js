import { binarySearch } from './binary_search.js';

// finding the intersection of two arrays
// О(n*log(n))

function intersection(arr1, arr2) {
  // set up an array for the result
  const elements = [];

  for (let i = 0; i < arr1.length; i++) {
    // run a binary search for the element at index i from the first array in the second
    const found = binarySearch(arr2, arr1[i]);

    // if the element is found, add it to the result
    if (found > -1) {
      elements.push(arr1[i]);
    }
  }

  // return result
  return elements;
}

const arr1 = [12, 13, 14, 15, 16, 17, 18];
const arr2 = [9, 13, 16, 17, 20, 21];

console.log(intersection(arr1, arr2)); // [ 13, 16, 17 ]
