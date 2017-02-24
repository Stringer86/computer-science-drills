'use strict';

exports.linearSearch = function(array, val) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) return i;
  }

  return -1;
};

exports.binarySearch = function binarySearch(array, value, min = 0, max = array.length) {

  if (min > max) return -1;
  const mid = Math.floor((min + max) / 2);
  if (value === array[mid]) return mid;
  if (array[mid] < value) return binarySearch(array, value, mid + 1, max);
  return binarySearch(array, value, min, mid - 1);
};
