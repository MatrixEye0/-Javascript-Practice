// in while only condition check
let val =5
while(val <=10){
    console.log(`Values of variable : ${val}`);
    val++   
}

const Arr= ["USA","India","Canada","Europe","Africa","South America","Asia"]

let index=0
while(index<Arr.length){
    console.log(`Array values : ${Arr[index]}`);
    index++   
}

// do While  first work done then condition check

let mark = 1
do{
    console.log(`Score : ${mark}`);
    mark++
}
while(mark<=10)
//----------Output 11 because run first then check condition 

let mark2 = 11
do{
    console.log(`Score : ${mark2}`);
    mark2++
}
while(mark2<=10)    