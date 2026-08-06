const input =document.querySelector('.input1');

function debounce(fun, delay){
    let timer;
    return function(...arg){
        clearTimeout(timer)// jabtak 1000ms ka pause nhi hoga code bas yahi tak chalega aur timer clear hota rahega
        timer=setTimeout(()=>{
           fun(...arg); 
        },delay) // agar koi kam ho raha hai but usme 1000ms ka delay aya to ye function call ho jayega 
               // this use when we search something and type continue when we sudden pause they recomend answer on base of word you type 
    }
}
input.addEventListener('input',debounce(function(){
    console.log('you pause here'); // yaha wo function laga sakte hai jise pause lete remaining word se result show kare search bar me
},1000));

//----------------Throttle--------------------------------------------------------------------
//  event continue chalega jabtak action hota rahega ever 100ms
//  because 100ms is delay point action ruka to throttle bhi ruk jayega 

const input2 =document.querySelector('.input2');

function throttle(fun, delay){
    let timer = 0;
    return function(...arg){
        let now = Date.now();
        if( now - timer>=delay){ // word type ke beach gap 100ms se zyada hoga tabhi ye chalega because condition esi hi lagi hui hai
            timer= now;
            fun(...arg);
        } 
        else{
            console.log('Fast typing'); // 100ms se kam me type kara to ye print hoga
        }
    }
}
input2.addEventListener('input',throttle(function(){console.log('Type speed slow')},100));