const test = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(test); // writable: false, enumerable: false, configurable: false we not change value

const user= {
    name:'Jagjit',
    age:22
}
console.log(Object.getOwnPropertyDescriptor(user,'name')); 
// we change value because all are true writable: true, enumerable: true, configurable: true

Object.defineProperty(user,'name',{
    writable: false,
    enumerable: false,
    configurable:false
}) // now we make user name as nonchangeable
console.log(Object.getOwnPropertyDescriptor(user,'name')); 

for (let [key,val] of Object.entries(user)){
     console.log(`${key} : ${val}`)
} // now name not show becuse we put false in enumerable