import { comparator, swap } from '../../utils';

export function insertionSort(array) {
  for (let partIndex = 1; partIndex < array.length; partIndex++) {
    let current = partIndex;

    while (
      array[current - 1] !== undefined &&
      (comparator(array[current], array[current - 1]) < 0)
    ) {
      swap(array, current - 1, current);
      current--;
    }
  }
}
