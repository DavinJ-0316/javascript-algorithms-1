import { comparator, swap } from '../../utils';

export function selectionSort(array) {
  for (let partIndex = array.length - 1; partIndex > 0; partIndex--) {
    let largestAt = 0;
    for (let i = 0; i < partIndex; i++) {
      if (comparator(array[i], array[largestAt]) > 0) {
        largestAt = i;
      }
    }
    swap(array, largestAt, partIndex);
  }
}
