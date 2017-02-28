'use strict';

const swap = require('./sort-helpers').swap;

function bubbleSort(arr) {
  var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i-1] > arr[i]) {
                done = false;
                swap(arr, i, i - 1)
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
  let min;

  for (let i = 0; i < arr.length; i++) {
    min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentSorted = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > currentSorted; j--) {
      arr[j+1] = arr[j];
    }
    arr[j + 1] = currentSorted;
  }
  return arr;


}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
};
