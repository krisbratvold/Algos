// Parens Valid
//     Given an str that has parenthesis in it
//     return whether the parenthesis are valid


const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the underlined ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing

function parensValid(str) {
    var stack = [];
    var opens = "({[";
    var closeToOpen = {
        ")":"(",
        ']':'[',
        '}':'{'
    }
    for(var i=0;i<str.length;i++){
        if (opens.includes(str[i])){
            stack.push(str[i])
        }
        else if (str[i] in closeToOpen){
            if(closeToOpen[str[i]] === stack.length-1){
                stack.pop()
            }
            else{
                return false
            }
        }
}
console.log(parensValid(str3))
// **********************************************************************
// **********************************************************************
// **********************************************************************

/* Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

// const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
// const expected1 = true;

// const str2 = "D(i{a}l[ t]o)n{e";
// const expected2 = false;

// const str3 = "A(1)s[O (n]0{t) 0}k";
// const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
// function bracesValid(str) {}