/* 
Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;


function sumArr(nums){
    if (nums.length === 1){
        return nums[0]
    }
    else {
        return nums.pop() + sumArr(nums)
    }
}
sumArr(nums1)
// ******************************************************************************
// ******************************************************************************
// ******************************************************************************

/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num10 = 5;
const expected10 = 15;
// Explanation: (1+2+3+4+5)

const num11 = 2.5;
const expected11 = 3;
// Explanation: (1+2)

const num12 = -1;
const expected12 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */

function recursiveSigma(num, sum=0, currentNum=0) {}