const symb = Symbol("key")

const user = {
    name:"Jagjit",
    "lastname":"Singh",//this never acces by dot only by ["latname"]
    id: symb,
    [symb]:"",// direct reffer symbol as key
    age:22,
    location:"San francisco",
    workday:["monday","tuesday","wednesday","thursday","friday"] 
 }// string never access by dot or if acces like user[name] is not  correct way user["name"].

console.log(user.name)
console.log(user["name"])
console.log(user["lastname"])
console.log(typeof user.id)
console.log(typeof user[symb])// sysmbol only acces by when declar inside this []

// Object.freeze(user) // now no value change in object. jabtak ye line chalegi object me kuch run nhi hoga jese user.fun bhi nhi.
// user.name="Doremone"
// console.log(user)

user.fun=function(){
    console.log('Hello jagjit')
}
console.log(user.fun())

user.fun2=function(){
    console.log(`My name ${this.name} ${this.lastname}`)
}
console.log(user.fun2())

const user2 = new Object(); // singleton object
user2.name = "Jagjit";
user2.age = 22;
console.log(user2);
 
const user3= {
    topic:"Nested loop",
    detail:{
        fullname:{
           first:"Jagjit",
           last:"Singh"
        }
    }
}
console.log(user3.detail.fullname.first);// no topic because it was string

const obj3 = Object.assign({},user, user3)// add objects if i add {} this in start it mean all object value goesin {} otherwise go in user
console.log(obj3)

const obj4 = {...user,...user3}// other way to merge obj.
console.log(obj4)

console.log(Object.keys(user));//return key ony but in array format same value return kar sakte hai
console.log(Object.entries(user));// give key and value each key value pair consider as one element in array. 

