function bubbleSort(array) {
  for (let partIndex = array.length - 1; partIndex > 0; partIndex--) {
    for(let i = 0; i < partIndex; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }
}