const arr =[1,2,3,4,,5,6,7,8,9,10]

const test = arr.filter( (value)=> value>6)
console.log(test); //run properly

const test2= arr.filter((val2)=>{
    // if not return anything they give us empty array because now we inside scopel.
    return val2>4
})
 console.log(test2)