const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;



/* 1. write a function that finds a number in an array
2. find the middle point of the arr
3. decide if the number is less than or greater than
4. find the mid point of that half
5. check greater than or less than
6. continue until you find the number given 
*/
const nums5 = [1,3,4,5,8,9,11,13,14,15,19,22,26,27,31,35,37]
const searchNum5 = 8;

function binarySearch(nums, searchNum) {
    var start = 0
    var end = nums.length-1
    while (start<=end){
        var mid = Math.floor((start+end)/2);
        if (searchNum == nums[mid])
            return true
        else if (searchNum > nums[mid])
            start = mid + 1;
        else 
            end = mid - 1;
        }
    return false
}

console.log(binarySearch(nums5, searchNum5)) 

/*
Given two arrays, interleave them into one new array.
The arrays may be different lengths. The extra items should be added to the
back of the new array.
*/


const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 6];
const expected3 = [1, 2, 3, 6, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
    let newArr= [];
    let largerArr = arr1
    if(arr2.length > arr1.length){
        largerArr = arr2
    }
    for (let i=0;i<largerArr.length;i++){
        if(i < arr1.length && i < arr2.length){
            newArr.push(arr1[i], arr2[i])
        }else{
            newArr.push(largerArr[i])
        }
    }
    return newArr
}

console.log(interleaveArrays(arrA1,arrB1))

console.log(interleaveArrays(arrA1,arrB1))
const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];