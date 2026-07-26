const myArr = [1,2,3,4,5,6,7,8,9,10] //js array is resizeable. make shallow copy (change in original heap)
const ipl = ["Punjab Kings","Australia","New Zeland","South Africa"]
const fifa=["spain","punjab","USA","Canada"]
console.log(ipl[0])
console.log(ipl.push("PBKS"))
console.log(ipl)
console.log(ipl.pop())
console.log(ipl)
console.log(ipl.unshift("DC"))// add at first
console.log(ipl)
console.log(ipl.shift())// remove at first
console.log(ipl)

console.log(myArr.includes(77))
console.log(myArr.indexOf(8))// tell value at which index
console.log(myArr)

const newArr = myArr.join()// make array into strig
console.log(myArr)
console.log(newArr, typeof newArr)

console.log("A", myArr)
const my1= myArr.slice(1,3)// start se 3 tak index return kar dega like 0,1,2. but 0 show nhi hoga. Copies elements (does NOT change the original array) 
console.log(my1)

console.log("B", myArr)

const my2= myArr.splice(1,3)// start se 3 tak array se nikal dega . change original array.
console.log(myArr)
console.log(my2)

myArr.push(ipl)// add ipl in myArr as whole array onsider one arrya. push in existing array
console.log(myArr)

const con = myArr.concat(ipl)// return new array and add ipl all element as individual array in con 
console.log(con);

const spread =[...myArr,...ipl,...fifa]// work same asconcat but concat add oonly 2 . this add many you want 
console.log(spread)

const insideArr= [1,2,[3,4],5,[6,7,[7,9,0,3],8],4]
const sortedArr= insideArr.flat(1)// return array in single array inside flat value tell flat array at how many depth 
const sortedArr2= insideArr.flat(2)
console.log(sortedArr)
console.log(sortedArr2)

console.log(Array.isArray("Jagjit"))
console.log(Array.from("Jgjit"))// convert into array
console.log(Array.from({name:"Jagjit"}))// give empty array because you dont tell give array of what key or value , name is key jagjit is value.

let a = 10
let b = 20
let c = 30

console.log(Array.of(a,b,c))//make array of abc