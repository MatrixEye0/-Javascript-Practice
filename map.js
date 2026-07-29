/* Use map() when you want to change every element into something else.
   map() does not modify the original array. */

const arr =[1,2,3,4,5,6,7,8,9,10]
const test = arr.map((val)=>val*4)
console.log(test);

// -------------------------------------chaining in map---------------------------------------------------------------

const arr2 =[1,2,3,4,5,6,7,8,9,10]
const test2 = arr2.map((val2)=>val2*4)// this array result pass to next chain (.map().map()) & we add anythiing in chain 
                  .map((val2)=>val2+5)
                  .filter((val2)=> val2 > 30)
console.log(test2);
