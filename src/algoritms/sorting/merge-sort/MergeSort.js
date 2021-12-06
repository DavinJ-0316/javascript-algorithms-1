function merge(firstArray, secondArray) {
  const sortedArray = [];
  let i = 0, j = 0;

  while (i < firstArray.length && j < secondArray.length) {
    sortedArray.push(
      firstArray[i] < secondArray[j] ?
      firstArray[i++] : secondArray[j++]
    );
  }

  return [...sortedArray, ...firstArray.slice(i), ...secondArray.slice(j)];
}

function mergeSort(array) {
  if (array.length === 1) return array;

  const middle = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}