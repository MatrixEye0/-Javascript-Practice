const btn = document.querySelector('button');

btn.addEventListener('click', async function(){ // await tabhi chalega jab function ke age async likha hoga
   let heavyFun=  await import("./heavy.js") // jabtak ye load nhi hoga age nhi badega 
   heavyFun.heavyCode(); // now heavy.js se heavyCode function load ho jayega 
});

