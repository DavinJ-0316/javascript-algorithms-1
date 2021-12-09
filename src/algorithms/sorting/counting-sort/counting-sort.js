export function countingSort(array) {
  let minimum = array[0];
  let maximum = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maximum) maximum = array[i];
    if (array[i] < minimum) minimum = array[i];
  }

  const bucket = new Array(maximum - minimum + 1).fill(0);
  for (let i = 0; i < array.length; i++) {
    bucket[array[i] - minimum]++;
  }

  array.length = 0;
  for (let i = 0; i < bucket.length; i++) {
    const count = bucket[i];
    for (let j = 0; j < count; j++) {
      array.push(i + minimum);
    }
  }
}
