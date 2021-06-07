/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
    var newStr = ""
    var str = str.toLowerCase()
    for (var i = 0; i < str.length;i++){
        if (str[i] != str[i+1]){
            newStr += str[i]
        }
    }
    return newStr
}
console.log(stringDedupe(str1))
module.exports = { stringDedupe };