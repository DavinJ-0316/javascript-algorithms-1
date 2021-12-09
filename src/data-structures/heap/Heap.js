export default class Heap {
  constructor(comparator) {
    this.arr = [];
    this.comparator = comparator;
  }

  isCorrectOrder(first, second) {
    return this.comparator(first, second) < 0;
  }

  getLeftChildIndex(parentIndex) {
    return (2 * parentIndex) + 1;
  }

  getRightChildIndex(parentIndex) {
    return (2 * parentIndex) + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  leftChild(parentIndex) {
    return this.arr[this.getLeftChildIndex(parentIndex)];
  }
 
  rightChild(parentIndex) {
    return this.arr[this.getRightChildIndex(parentIndex)];
  }
 
  parent(childIndex) {
    return this.arr[this.getParentIndex(childIndex)];
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }
 
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.arr.length;
  }
 
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.arr.length;
  }
 
  isEmpty() {
    return !this.arr.length;
  }
}