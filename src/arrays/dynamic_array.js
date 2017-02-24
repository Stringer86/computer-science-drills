const FixedArray = require('./fixed_array');

class DynamicArray {
  constructor(length) {
    this.length = length;

    // Initialize the array for twice the length
    this.array = new FixedArray(length * 2);
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    return this.array.get(index);
  }

  set(index, item) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    this.array.set(index, item);
  }

  // Implement a method push that takes in one argument, item (a number), it
  // adds the item to the end of the array, copying it to a new FixedArray if
  // necessary. There is no need to return anything.
  push(item) {
    if (this.length < this.array.length) {
       this.array.set(this.length, item);
       this.length++;
       return;
     }

     const newArr = new FixedArray(this.length * 2);
     for (let i = 0; i < this.array.length; i++) {
       newArr.set(i, this.array.get(i));
     }

     this.array = newArr;
     this.array.set(this.length, item);
     this.length++;
}
  // Implement a method pop that does not take in any arguments. It delete the
  // item at the end of the array.
  pop() {
    this.array.set(this.length - 1, undefined);
    this.length--;

  }

  // Implement a method del that takes in one argument, index (a number), it
  // deletes the item at that index. There is no need to return anything.
  del(index) {

    for (let i = 0; i < this.array.length; i++) {
      if (i < index) {
        this.array.set(i, this.array.get(i))
      } else if (i > index) {
        this.array.set(i - 1, this.array.get(i))
      }
    }
    this.length--;
  }
}

module.exports = DynamicArray;
