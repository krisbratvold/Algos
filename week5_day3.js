/* 
Array: Mode

Create a function that, given an array of ints,
returns the int that occurs most frequently in the array.
What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
what if all items occur the same number of times?
- return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
//  - order doesn't matter
//make a function that counts duplicates
//compare number of dups together
//push to new array

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

function mode(nums) {
    var counts = {}
    var max = 0
    var mode = []
    for (var i = 0; i < nums.length; i++) {
        counts[nums[i]] = (counts[nums[i]] || 0) + 1;
        if (counts[nums[i]] > max) {
            max = counts[nums[i]];
            mode.push(nums[i])
        }
    }
    return mode
}

console.log(mode(nums5))


/* 
Missing Value
You are given an array of length N that contains, in no particular order,
integers from 0 to N . One integer value is missing.
Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
const expected1 = 2;

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing

/* 
Bonus: now the lowest value can now be any integer (including negatives),
instead of always being 0. 
*/



const nums3 = [2, -4, 0, -3, -2, 1];
const expected3 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];
const expected4 = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */
function missingValue(unorderedNums) {
    if (unorderedNums.length < 1){
        return null
    }
    let min = unorderedNums[0]
    let max = unorderedNums[0]
    let sum = 0
    let expectedSum = 0
    unorderedNums.forEach(item => {
        if(item < min){
            min = item
        } else if (item>max){
            max = item
        }
        sum += item
    });
    for (let i = min;i<=max;i++){
        expectedSum += i
    }
    let missingNum = expectedSum - sum
    return missingNum
}

console.log(missingValue(nums4))