/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
   Example
   The minimum sum is and the maximum sum is
   . The function prints  16 24
   Function Description Complete the miniMaxSum function in the editor below.
   miniMaxSum has the following parameter(s):
   arr: an array of 
   integers
   Print
   Print two space-separated integers on one line: the minimum sum and the maximum sum of
   of elements.
   Input Format A single line of five space-separated integers.
   Constraints Output Format
   Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)
   Sample Input 1 2 3 4 5
   Sample Output 10 14
   Note: to work correctly, it was necessary to order the array...
 */

function MiniMaxSum(arr_nums) {
	let totalitems = (arr_nums.length) * 2;

	if (totalitems < 1)
		return -1;

	let summin = 0;
	let summax = 0;
	let i = 0;
	let j = 1;
	let resultfirst = false;
    arr_nums.sort();
    
	while (totalitems > 0) {
		//
		if (resultfirst === false) {
			let newvalue = arr_nums[i];
			if (!addDoesOverflow(summax, newvalue)) {
				summin = summin + newvalue;
			}
			//
			if (i >= 3)
				resultfirst = true;
			i++;
		} else if (j >= 5) {
			break;
		} else {
			let newvalue = arr_nums[j];
			//
			if (!addDoesOverflow(summax, newvalue)) {
				summax = summax + newvalue;
			}
			j++;
		}
		totalitems--;
	}
	//
	console.log(summin, summax);
}

function addDoesOverflow(a, b) {
	var c = a + b;
	return a !== c - b || b !== c - a;
}

//Another way to do that...
// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    const sum = (arr_value) => (arr_value || []).reduce((target, value) => {
        return target + value;
    }, 0);

    arr.sort();
    let for_first = arr.slice(0, -1);//Content to sum
    let for_second = arr.slice(1);//Content to sum
    console.log(for_first, for_second);
    //
    let minSum = sum(for_first)
    let maxSum = sum(for_second);

    console.log(minSum, maxSum);
}



miniMaxSum([7, 69, 2, 221, 8974]);
