/* 
Balance Index
Here, a balance point is ON an index, not between indices.
Return the balance index where sums are equal on either side
(exclude its own value).

Return -1 if none exist.

*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

function balanceIndex(nums) {
    var sumLeft=nums[0]
    var sumRight=0
    if(nums.length < 3){
        return -1;
    }
    else{
        for(var i = 2;i<nums.length;i++){
            sumRight += nums[i]
        }
        for(var i = 1;i<nums.length;i++){
            if (sumLeft === sumRight){
                return i
            }
            sumRight -= nums[i+1]
            sumLeft += nums[i]
        }
    }
}
balanceIndex(nums1)

module.exports = { balanceIndex };

// **********************************************************************
// **********************************************************************
// **********************************************************************


/* 
Balance Point
Write a function that returns whether the given
array has a balance point BETWEEN indices, 
where one side’s sum is equal to the other’s. 
*/

const nums1 = [1, 2, 3, 4, 10];
const expected1 = true;
// Explanation: between indices 3 & 4

const nums2 = [1, 2, 4, 2, 1];
const expected2 = false;

/**
 * Determines if there is a balance point BETWEEN indexes where the sum of the
 *    left side is equal to the sum of the right side of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {boolean} Indicates if a balance point exists.
 */
function balancePoint(nums) {}

module.exports = { balancePoint };