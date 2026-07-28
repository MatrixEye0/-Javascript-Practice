for ( let i = 2; i<=5; i++){
    console.log(` ${i} ki Table`);
    for(let j=1;j<=10;j++){
       console.log(i+' * ' + j + ' = ' + i*j); 
    }
}

//-------------------------------------------------------------------------------------------------------------

const Arr= ["USA","India","Canada","Europe","Africa","South America","Asia"]

for(let count=0; count<Arr.length;count++){
    const result = Arr[count]
    console.log(result);
    
}

// Break and Continue------------------------------------------------------------------------------------

for(let b=1;b<200;b++){
    if(b==22){
        console.log(`${b} is my Age`);
        break; // if you want exit from loop 
    }
    console.log(`Values : ${b}`);
    
}

for(let b=1;b<25;b++){
    if(b==22){
        console.log(`${b} is my Age`);
        continue;  
    }
    console.log(`Values : ${b}`);
    
}