/*
Recursive Binary Search
Input: SORTED array of ints, int value
Output: bool representing if value is found
Recursively search to find if the value exists, do not loop over every element.
Approach:
Take the middle item and compare it to the given value.
Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;


let left = 0
let right = nums3.length-1

function binarySearch(nums, searchNum, left, right) {
    if (left > right){
        return false
    }
    let mid = Math.floor((left + right)/2)
    if(nums[mid]==searchNum){
        return true
    }
    if(nums[mid]<searchNum){
        return binarySearch(nums, searchNum,mid+1,right)
    }
    else{
        return binarySearch(nums, searchNum,left,mid-1)
    }
}


console.log(binarySearch(nums3, searchNum3,left,right))
// *************************************************************
// *************************************************************
// *************************************************************


/* 
Recursively reverse a string
helpful methods:
str.slice(beginIndex[, endIndex])
returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */


function reverseStr(str,i=str.length -1) {
    if(i===0){
        return str[i];
    }
    else{
        return str[i] + reverseStr(str, i-1)
    }
}

console.log(reverseStr(str1))