// everything in js act as object if we want.use by dot because only only use by object
function pro(num){
    return num**9;
}
pro.power=8;// function aslo act as object thats why we use dot 
console.log(pro(9));
console.log(pro.power);
console.log(pro.prototype);


function user (username,age){
    this.username= username;
    this.age=age;
    return this
}
user.prototype.increment=function(){
     this.age++; //now those who call, they incress only those value & 
                //from this type user.prototype.inc we make method in prototype of any thing like object array function.
}
user.prototype.print=function(){
    console.log(`${this.age}`);
}
const name = new user('Jagjit Singh',22)
const name2 =new user('Mahima Gupta',22)
name.print()

// ------ inheritance--------------------------------------------------------------------------------

const test= {
    name:'Jagjit'
}
const age={
    umar:22
}
const position={
    role:'SDE 3',
    //__proto__:test // now with this position inherit user value but it is old approach
}
//position.__proto__=test // other way to inherit 

//mordern syntax of inheritance
Object.setPrototypeOf(position,test)// position access user properties

console.log(position);
console.log(position.name)// jagjit output 

// -----------------------------------------------------------------------------------

const Name = 'Jagjit  '
String.prototype.checkLength=function(){
    console.log(`${this}`)
    console.log(`Lenght of word is : ${this.trim().length}`);
}
Name.checkLength()
'Mahima'.checkLength()// due to this keyword jisne call kara uspe function use hua not to all 


