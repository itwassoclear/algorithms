// binary search for element index in sorted array
// О(log(n))

export function binarySearch(sortedNumbers, n) {
  // determine the start and end points of the search
  let start = 0;
  let end = sortedNumbers.length;

  while (start < end) {
    // finding the element in the middle of the array
    const middle = Math.floor((start + end) / 2);
    const value = sortedNumbers[middle];

    // compare the argument to the value in the middle of the array
    if (n == value) {
      return middle;
    }

    // if the argument is less than the middle value, split the array in half
    // now the end of the array is its former middle
    if (n < value) {
      end = middle;
      // otherwise, the beginning of the array becomes the element immediately after the "middle"
    } else {
      start = middle + 1;
    }
  }

  // if the desired number is not found, return -1
  return -1;
}

console.log(binarySearch([-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1)); // 3
