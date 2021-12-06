export function selectionSort(array) {
  for (let partIndex = array.length - 1; partIndex > 0; partIndex++) {
    let largestAt = 0;
    for (let i = 0; i < partIndex; i++) {
      if (array[i] > array[largestAt]) {
        largestAt = i;
      }
    }
    [array[largestAt], array[partIndex]] = [array[partIndex], array[largestAt]];
  }
}
