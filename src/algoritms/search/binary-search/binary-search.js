import { comparator } from '../../utils';

export function binarySearch(array, wanted) {
	let start = 0;
	let end = array.length - 1;

	while (start <= end) {
		let middle = Math.floor((start + end) / 2);
		if (comparator(array[middle], wanted) === 0) {
			return middle;
		}
		if (comparator(array[middle], wanted) < 0) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
	}
	return -1;
}
