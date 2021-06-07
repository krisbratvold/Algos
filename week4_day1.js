// const keys1 = ["abc", 3, "yo"];
// const vals1 = [42, "wassup", true];
// const expected1 = {
//     abc: 42,
//     3: "wassup",
//     yo: true,
// };

// function zipArraysIntoMap(keys, values) {
//     var newDict = {};
//     for(var i = 0; i < keys.length; i++){
//         newDict[keys[i]] = values[i]
//     }
//     return newDict
// }

// console.log(zipArraysIntoMap(keys1,vals1))
// **************************************************************************************************************************************************
// **************************************************************************************************************************************************
// **************************************************************************************************************************************************


const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

function invertObj(obj) {
    var newDict = {}
    var keys = Object.keys(obj1)
    keys.forEach(item) 
        newDict[obj][item] =
    return newDict
}

console.log(invertObj(obj1))