const refreshBtn = document.getElementById("refreshBtn");

refreshBtn.addEventListener("click", () => {
    location.reload();
});

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click',function(change){
           if(change.target.id==='red'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='blue'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='green'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='yellow'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='orange'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='purple'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='pink'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='cyan'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='brown'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='gray'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='black'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='white'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='gold'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='lime'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='teal'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='navy'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='maroon'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='violet'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='lightgreen'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='olive'){
            body.style.backgroundColor=change.target.id
           }
           if(change.target.id==='coral'){
            body.style.backgroundColor=change.target.id
           }
    })
});