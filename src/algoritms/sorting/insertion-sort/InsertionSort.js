function insertionSort(array) {
  for (let partIndex = 1; partIndex < array.length; partIndex++) {
    let currentUnsorted = array[partIndex];
    let index = 0;

    for (index = partIndex; index > 0 && array[index - 1] > currentUnsorted; index--) {
      array[index] = array[index - 1];
    }
    array[index] = currentUnsorted;
  }
}