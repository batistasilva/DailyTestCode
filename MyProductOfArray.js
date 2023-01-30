/**
 * This problem was asked by Uber.
 * Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
 * For example, if our input was [1, 2, 3, 4, 5], 
 * the expected output would be [120, 60, 40, 30, 24]. 
 * If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 * Follow-up: what if you can't use division?
 * ----------------------------------------------------------------
 * Example: Input: arr[]  = {10, 3, 5, 6, 2}
 * Output: prod[]  = {180, 600, 360, 300, 900}
 *  3 * 5 * 6 * 2 product of other array elements except 10 is 180
 *  10 * 5 * 6 * 2 product of other array  elements except 3 is 600
 *  10 * 3 * 6 * 2 product of other array elements except 5 is 360
 *  10 * 3 * 5 * 2 product of other array elements except 6 is 300
 *  10 * 3 * 5 * 6 product of other array elements except 2 is 900
 *****/

function ProductOfArray(arr_numbers) {
    var arr_temp = Array.from(arr_numbers);
    //
    let arr_sum = new Array(arr_temp.length);
    
    //Calculate the quantity of the loop for Calculate the sum.
    let arr_length = (arr_temp.length - 1) * arr_temp.length;   
    //start on zero 
    let number_wait=0;
    //
    arr_temp.splice(number_wait,1);//remove first item to work
    //
    let i=0;
    let sum=0;
    //
    while(arr_length > 0){
        //
        if(i === arr_temp.length -1){
            console.log('-'.repeat(50));
            i = 0;
            number_wait++;//increment item to sum 
            
            //acquire a copy of the original array 
            arr_temp = Array.from(arr_numbers).slice();
            
            arr_temp.splice(number_wait,1);
            //add sum to new array and set to zero
            arr_sum.push(sum);//Add new item acquired to the result array.
            console.log('Total After Calc: ',arr_sum);
            //
            sum=0;
             console.log('-'.repeat(50));            
        }else{
            if(sum === 0){//To start the sum...
               sum = arr_temp[i] * arr_temp[i+1];
            }else{//Keep going with the sum..
               sum = sum * arr_temp[i+1];
               console.log('Sum: ', sum);
            }
        i++;
        }
//        console.log('Loop While:  ',arr_length);
        arr_length--;
    }
    //
    console.log('Total Geral: ',arr_sum);
}
//
ProductOfArray([10, 3, 5, 6, 2]);
