function first(a,b){// here a,b is parameter

    //    let sum = a+b
    //    return sum
    return a+b //both is ok 
    
}
const result = first(5,8)// here 5,8 is argument
const result2 = first(5,"a")
const result3 = first(5, null)

console.log("Result 1 : ", result)
console.log("Result 2 : ", result2)
console.log("Result 3 : ", result3)

//console.log(loguser('Jagjit')) if we console befor function it also run 
// but if console before function and function store inside datatype like const stroe = function() it not run
function loguser(user){
    return`${user} just logged in`
}
console.log(loguser('Jagjit'));// if we pass nothing it return undefine 
 