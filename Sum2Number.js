/**
 *  This problem was recently asked by Google.
 *  Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 *  For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 *  Bonus: Can you do this in one pass?
 */

function Sum2Number(numbers, x) {
	numbers.sort((a, b) => a - b);//To organise

	/**
	 * This for, with variable and comparisons is something new for me...
	 */
	for (let i = 0, j = numbers.length - 1; i < j;) {
		const sum = numbers[i] + numbers[j];
		console.log('Sum: ', numbers[i] + numbers[j], ' Numbers: ', numbers[i], ' - ', numbers[j]);
		if (sum === x) {
			console.log('Congratulations, the goal has been achieved...', sum);
			return sum;
		} else if (sum < x) {
			i++;
		} else if (sum > x) {
			j--;
		}
	}
}

Sum2Number([10, 15, 3, 7], 17);
