/****
 * Good morning! Here's your coding interview problem for today.
 * This problem was asked by Stripe.
 * Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
 * For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
 * You can modify the input array in-place.
 ***/

function myMissingPositiveInteger(arr) {
	//
	let min = 1;
	for (; min <= arr.length;) {
		console.log(min);
		if (min >= 1 && arr.indexOf(min) == -1) {
			console.log('Congrat...: ', min);
			return min;
		}
		min++;
	}
}


const firstMissingPositive = function(nums) {
	const set = new Set(nums);
	let min = 1;

	while (set.has(min)) {
		console.log(min);
		min++
	}
	console.log(min);
	return min
};

function FindMissPositiveInArray(arr) {
	for (i = 1; ; i++) {
		console.log(i);
		/****
		 * If the result for indexOf is equal to -1, it is because the element 
		 * for index[i] was not found in the array. So that's our missing 
		 * positive number.
		 **/
		if (arr.indexOf(i) == -1) {
			console.log('Congrat....:', i);
			return i;
		}
	}
}


//firstMissingPositive([3, 4, -1, 1]) // returns 3


myMissingPositiveInteger([3, 4, -1, 1]);

//FindMissPositiveInArray([3, 4, -1, 1]);


