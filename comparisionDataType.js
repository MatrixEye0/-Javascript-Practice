console.log(null==0)
console.log(null>=0)
console.log(null>0)
console.log("2"===2) /*== → Allows type conversion, except null is only loosely equal to undefined.
                       === → No type conversion; both type and value must match.
                       <, >, <=, >= → Convert operands to numbers when appropriate 
                       (null becomes 0, while undefined becomes NaN).*/