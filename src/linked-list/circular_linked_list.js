'use strict';

/*
  A Circular Linked List is a list where head.prev points to tail and
  tail.next points to head. Complete this linked list with a significantly
  reduced API.
*/

function Node(val) {
  this.next = null;
  this.prev = null;
  this.value = val;
}

function CircularLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

/*
  Add an item to the list -- the new node becomes the tail of the list.
*/
CircularLinkedList.prototype.add = function(val) {
};

/*
  Remove and return the val of the current tail.
*/
CircularLinkedList.prototype.removeLast = function() {
};

module.exports = CircularLinkedList;
