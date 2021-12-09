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
}