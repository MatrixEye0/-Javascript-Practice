
/* Asynchronous JavaScript means JavaScript can start a task that takes time
 (like fetching data from a server or waiting for a timer) without stopping the rest of the program. 
 
 async is a keyword used before a function to make it asynchronous.
 An async function always returns a Promise.
 await pauses the execution of an async function until a Promise settles

 JAVASCRIPT is Synchronous and single threded */

async function hello() {
    return "Hello";
}
hello().then(console.log);
 
// await code------------------------------------------------------------------------------
function delay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Done");
        }, 2000);
    });
}
async function run() {
    console.log("Start");
    const result = await delay();
    console.log(result);
    console.log("End"); // ouput start , wait 2 sec , done , end
}
run();

//-------------------------------------------------------------------------------------------------  

const test=setTimeout(function(){
    console.log('Jagjit');    
},2000) // only work one time

clearTimeout(test)// stop execution of settimeout 

const test2 = setInterval(function(){
    console.log('Waheguru',Date.now());
},5000); // print every 500 ms becuse we set time 500 ms
clearInterval(test2) // this stop interval

