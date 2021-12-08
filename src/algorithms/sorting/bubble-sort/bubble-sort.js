import { comparator, swap } from '../../utils';

export function bubbleSort(array) {
  for (let partIndex = array.length - 1; partIndex > 0; partIndex--) {
    for(let i = 0; i < partIndex; i++) {
      if (comparator(array[i], array[i + 1]) > 0) {
        swap(array, i, i + 1);
      }
    }
  }
}
