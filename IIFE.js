// Immediately Invoked function expression IIFE = use for prevention of global scope popution
//Normally, a function runs only when it is called. An IIFE runs automatically when the JavaScript engine reads it (compiles it).

// function iife(){
//     console.log("work properly")
// }() if we write like thi for imediate call they show error  because we nt wrap function inside ()

//named IIFE--------------------
(function iife(){
    console.log("work properly")
})();//now we call imediatliy  they run like this ()()


// Unamw IIFE----------------
(()=>{
    console.log("work properly")
})();// also run if we not use semicolum they not run when we declare 2 IIFE

((name)=>{
    console.log(`My name ${name}`)
})('Jagjit Singh')// also run like this

// -----------module pattern-----------------------------------
let check = (function (){
    let name = 'Jagjit'
    let age = 22
    let networth = 1000000000
    function username(){
        return name // agar return name nhi karenge to console print hoga 
                 // par undefine bhi kyoki kuch bhi return nhi hua example userage function .
          console.log(name);      
    }
    function userage(){
        console.log(age);
    }
    return{
      u:  username,
      a:  userage
    }; // jo ham return object me dalenge wahi outside se execute ho payega .
     // iss iife me networth execute nhi hoga outside . 
     // agar networth ko kisi aur function me dalke us function ko return obj me dalde to chal jayega 
})();
console.log(check.u())
console.log(check.a())