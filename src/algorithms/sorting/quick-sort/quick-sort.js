import { comparator, swap } from '../../utils';

function partition(array, start, end) {
  const pivot = array[Math.floor((start + end) / 2)];

  while (comparator(start, end) <= 0) {
    while (comparator(array[start], pivot) < 0) {
      start++;
    }
    while (comparator(array[end], pivot) > 0) {
      end--;
    }
    if (comparator(start, end) <= 0) {
      swap(array, start, end);
    }
  }

  return array;
}

export function quickSort(array, left, right) {
  if (array.length > 1) {
    const index = partition(array, left, right);
    if (comparator(left, index - 1) < 0) {
      quickSort(array, left, index - 1);
    }
    if (comparator(index, right) < 0) {
      quickSort(array, index, right);
    }
  }

  return array;
}
