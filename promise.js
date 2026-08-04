const promiseOne = new Promise(function(resolve,reject){
    // work Async task like DB call, cryptography, networkcall
    setTimeout(function(){
       console.log('Admission Successfull'); 
       resolve() // if we want to connect resolve with .then so we declare resolve here
       // if resolve not connect to '.then'so then not execute  
    },400)
})
promiseOne.then(function(){
    console.log('Promise consumed');   
})

//-------------------------------other way to declare promise without store in variable--------------------------------------------------------------------------

new Promise(function(resolve,reject){
    setTimeout(function(){
       console.log('Placement Successfull'); 
       resolve() 
    },800)
}).then(function(){
    console.log('Promise consumed 2nd time');   
})

// -------------------pass value in resolve-----------------------------------------------------------

new Promise(function(resolve,reject){
    setTimeout(function(){
       console.log('Data pass Successfull'); 
       resolve({name:'Jagjit', age:22}) 
    },1200)
}).then(function(user){
    console.log(user);   
})

//-----------------------------chaining------------------------------------------------------------------

new Promise(function(resolve,reject){
    setTimeout(function(){
       let error= true // if error false so resolve value executed because we put condition in reslove  no error execute resolve otherwise eecute reject
       if(!error){
        resolve({name:"Jagji Singh", Job:"SDE III"})
       } else{
        reject('ERROR !!!! ')
       }
    },1600)
})
.then(function(user){
    console.log(user);
    return user.name   
})
.then((name)=>{
    console.log(name);
})
.catch(function(er){
    console.log(er);   
}).finally(()=>console.log("They executed always"))

//------------------------------------------------------------------------------------------------------