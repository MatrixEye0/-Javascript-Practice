 const randomColor = function(){
    const id ='0123456789ABCDEF'
    let color ='#'
    for (let i=0; i<6; i++){
        color += id[Math.floor(Math.random()*16)]
    }
    return color;
}


let colorid // yaha declar karne se dusre function me bhi chal jayega 
const startcolors = function(){
   if(!colorid){
    colorid=setInterval(change,500)
   }
    function change(){
        document.body.style.backgroundColor= randomColor();
    }
}
const stopcolors = function(){
    clearInterval(colorid)
    colorid=null;// good aproach  because now we clean colorid value
}

document.querySelector('#start').addEventListener('click',startcolors);
document.querySelector('#stop').addEventListener('click',stopcolors);