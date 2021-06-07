function minCoinChange(num) {
    var object = {
        quarters: 0,
        dimes: 0,
        nickle: 0,
        penny: 0
    };
    while(num != 0){
    if(num >= 25){
        object.quarters += 1
        console.log("quarters")
        num -=25
    }
    else if (num >= 10){
        console.log("dimes")
        object.dimes +=1
        num -=10
    }
    else if(num >= 5){
        object.nickles += 1
        console.log("nickles")
        num -= 5
    }
    else if(num >= 1){
        object.penny +=1
        console.log("penny")
        num -=1
    }
console.log(object)
}
}


minCoinChange(124)
// }
// console.log(minCoinChange(321))
// console.log(minCoinChange(79))
// GIVEN A NUMBER FIND THE LEAST AMOUNT OF COINS YOU CAN USE TO HAVE THE SAME AMOUNT
// EX. 321 => "12 QUARTERS, 2 DIMES, 1 PENNY"
// EX. 79 => "3 quarteres, 4 pennies"
// {
//     'quarter':3,
//     'dimes':0,
//     'nickel':0,
//     'penny':4
// }


function invertObj(obj) {
    var newobj = {}
    for(var key in obj)
        newobj[obj[key]]=key
    return newobj
}

console.log(invertObj({
    A:"ONE",
    B:"TWO",
    C:"THREE"
}))
// GIVEN AN OBJECT WITH KEY VALUE PAIRS, RETURN A DICTIONARY WITH THE KEYS AND VALUE SWAPPED
// EX.
// {
//     'A':"ONE",
//     'B':"TWO",
//     'C':"THREE"
// }
// {
//     "ONE":'A',
//     "TWO":'B',
//     "THREE":'C'
// }