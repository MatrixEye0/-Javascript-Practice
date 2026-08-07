export function heavyCode(){
    console.log('Heavy Code load')
// this code only for practice but this is bad approach 
    const ul = document.querySelector('ul');
     const space = document.createDocumentFragment(); // first memory space me load honge fir browser pe 
     for (let i =0 ; i < 10000 ;i++)
   {   // but we dont use like this we browse few element first and other thanother this save unnesseary loading
     const li = document.createElement('li')
     const n = Math.floor(Math.random()*20)
     const m = Math.floor(Math.random()*20)
     let add = n+m
     li.textContent=add;
     space.appendChild(li)
   }
  ul.appendChild(space)
}
// when you write very huge code but you want all code not load unessessary load if they need  
// so we write like this and add to event so event trigger this file code run. 