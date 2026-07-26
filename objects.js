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