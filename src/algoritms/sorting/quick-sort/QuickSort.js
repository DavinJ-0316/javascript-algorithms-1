function partition(array, left, right) {
  const pivot = array[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      rigth--;
    }
    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];
    }
  }

  return array;
}

export function quickSort(array, left, right) {
  if (array.length > 1) {
    let index = partition(array, left, right);
    if (left < index - 1) {
      quickSort(array, left, index - 1); 
    }
    if (index < right) {
      quickSort(array, index, right);
    }
  }

  return array;
}
