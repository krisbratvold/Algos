/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/
var str1 = "the_stealth_warrior"

function toCamelCase(str){
var newStr = ""
    for(var i = 0; i < str.length;i++){
    newStr += str[i]
        if (str[i] == "-"|| str[i] == "_"){
            newStr += str.charAt(i+1).toUpperCase()
            i = i+1
        }
        newStr = newStr.replace("-","");
        newStr = newStr.replace("_","");
    }
    return newStr
}

console.log(toCamelCase(str1))



var str1 = "the_stealth_warrior"

function toCamelCase(str){
var newStr = ""
    for(var i = 0; i < str.length;i++){
    newStr += str[i]
        if (str[i] == "-"|| str[i] == "_"){
            newStr += str.charAt(i+1).toUpperCase()
            i = i+1
        }
        newStr = newStr.replace("-","");
        newStr = newStr.replace("_","");
    }
    return newStr
}

console.log(toCamelCase(str1))