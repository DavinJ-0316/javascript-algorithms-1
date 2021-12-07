import { comparator } from '../../utils';

export function linearSearch(array, wanted) {
	const found = [];
	array.forEach((item, index) => {
		if (comparator(item, wanted) === 0) {
			found.push(item);
		}
	})
	return found;
}
