const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;


function isPalindrome(str) {
    var newString = str.split("").reverse().join("");
        console.log(newString)
        if (newString == str){
            return true
        }
        else{
            return false
        }
    }



isPalindrome("a x a")

  // ******************************************************************************
  // ******************************************************************************
  // ******************************************************************************

// const { isPalindrome } = require("./isPalindrome");

const str1 = "what up, daddy-o?";
const expected1 = "dad";

const str2 = "uh, not much";
const expected2 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";

function longestPalindrome(str) {
    if (str.length === 0){
        return false
    }
    let longestPal = str[0];
    for (i = 0; i <str.length - 1; i++) {
        for(let j=str.length -1; j >= i; j--){
            let subStr = str.slice(i,j)
        if (subStr.length > longestPal && isPalindrome(subStr)){
            longestPal = subStr
        }
        }
    }
    return longestPal
}

console.log(longestPalindrome("what up, daddy-o?"))