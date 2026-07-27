function priceCalculate(val1,val2,...total) 
/*... put all argument in array otherwise they
 return only first value in argument . if add some parameter before (...) 
 this so value store in parameter before ... and remaining store in ... as array
 outout is [56,43] because 90 ,89 store in val1 and val2 */
{
    return total
}
console.log(priceCalculate(90,89,56,43))

const user={
    name:"Jagjit",
    city:"New York",
    age:22
}
function handelObject(obj){
   return (`User name is ${obj.name} and age is ${obj.age}. Live in ${obj.city}`)
   //console.log(`User name is ${obj.name} and age is ${obj.age}. Live in ${obj.city}`); is also return value
   
}
console.log(handelObject(user))

//------------------------------------------------------------------------------------------------------------

const myArr = [ 20,60,50,30]
function returnSecondValue(getArr){
    return getArr[1]
}
console.log(returnSecondValue(myArr));

