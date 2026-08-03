
/* Asynchronous JavaScript means JavaScript can start a task that takes time
 (like fetching data from a server or waiting for a timer) without stopping the rest of the program. 
 
 JAVASCRIPT is Synchronous and single threded */
 
const test=setTimeout(function(){
    console.log('Jagjit');    
},2000) // only work one time

clearTimeout(test)// stop execution of settimeout 

const test2 = setInterval(function(){
    console.log('Waheguru',Date.now());
},5000); // print every 500 ms becuse we set time 500 ms
clearInterval(test2) // this stop interval

