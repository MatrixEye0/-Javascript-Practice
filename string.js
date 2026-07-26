const name = "Jagjit Singh"
const value = 156
 console.log(name+ value + 'Dollar') /*not good way to connect string */
 console.log(`My name ${name} my net worth is ${value} million Dollar`)//this is reliable way//

 const user={
    name:'Jagjit Singh',
    networth:'156 million',
    age:22
 };
 console.log(`My name is ${user.name} and age is ${user.age}. My networth is ${user.networth} Dollar`)

 const newMethod = new String('JagJit')//This make string like object 0=j,1=a,2=g here no is key and j,a,g is its value//
 console.log(newMethod)
 console.log(newMethod.__proto__);
 console.log(newMethod.length)
 console.log(newMethod[0])//when i want 0 key value. its have lot of method & functions check in console i browser //
 
 console.log(newMethod.toUpperCase())//not change original string due to it save in stack//
 console.log(newMethod.charAt(4))
 console.log(newMethod.indexOf('J'))

 const other = newMethod.slice(-5,4)
 console.log(other)
 const others = newMethod.slice(0,4)
 console.log(others)
