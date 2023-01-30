const findPair = (array, k) => {
	array.sort((a, b) => a - b);
	let left = 0;
	let right = array.length - 1;

	while (left < right) {
		const sum = array[left] + array[right];
		//
		console.log('array[left] + array[right]', array[left], array[right]);
		//
		if (sum === k) {
			console.log('Congratulations, the goal has been achieved...', sum);
			return true;
		} else if (sum < k) {
			left += 1;
		} else {
			right -= 1;
		}
	}
	return false;
}

findPair([10, 15, 3, 7], 17);