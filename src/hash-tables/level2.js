'use strict';

/*

Create a function named reverseMerge.
It takes two arguments 'keyArr' and 'valArr' both of type Array.
It will return a hash that is a merge between the two inputs where
the values in keyArr will be the hashes key and
the values in valArr will be the hashes value.
The catch is that the values from the valArr will be assigned in from last to first.

i.e.
keyArr = [a, b, c];
valArr = [1, 2, 3];

output => {a: 3, b: 2, c: 1}

*/
// should return an empty array if both input arrays are empty'
// should be able to merge if both inputs have only a single value'
// should be able to handle merges for larger arrays of the same size
// should use int 42 as value if valArr is smaller than keyArr'
// should use \'foo\' as value if keyArr is smaller than valArr'

const reverseMerge = (keyArr, valArr) => {
  let hash = {};
  let length = keyArr.length > valArr.length ? keyArr.length : valArr.length;
  let changeLength = length;

    for (let i = 0; i < length; i++) {
      if (i >= keyArr.length) {
        let lastArr = [];
        for (let j = keyArr.length - 1; j >= 0; j--) {
          lastArr.push(valArr[j])
        }
        hash['foo'] = lastArr;
        return hash;

      }

      hash[keyArr[i]] = valArr[changeLength - 1] || 42;
      changeLength--;
    }

    return hash;

};

/*

Create a function named mostUsedWord.
It takes a single argument 'sentence' of type string.
It will return an object with a single key-value pair.
The key will be the word with the highest occurance in the string.
The value will the the number of occurances of that word in the string.

*/

const mostUsedWord = (sentence) => {
  let arr = sentence.split(" ");
  let hash = {};
  let hash2 = {};


  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].toLowerCase();
    if(hash[word]) {
      hash[word] = hash[word] + 1;
    } else {
      hash[word] = 1;
    }
  }

  let arr2 = Object.keys( hash ).map((key) => hash[key]);

  let max = Math.max.apply(null, arr2);

  for (let key in hash) {
    if (hash[key] === max) {
      hash2[key] = hash[key];
    }
  }

  return hash2;



};

/*

Write a function, isAnagram.
It takes a two arguments 'test' and 'original', both of type string.
It returns TRUE if the words are anagrams of one another and FALSE if it is not.

*/

const isAnagram = (test, original) => {
  let test1 = test.split('').sort().join('');
  let original2 = original.split('').sort().join('');

  if (test1 === original2) return true;

  return false;
};

module.exports = { reverseMerge, mostUsedWord, isAnagram };
