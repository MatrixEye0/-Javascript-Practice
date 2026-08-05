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