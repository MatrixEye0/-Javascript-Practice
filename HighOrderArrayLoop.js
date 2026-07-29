const Arr = [1,2,3,4,5,6]
// forof loop
for (const value of Arr) {
     console.log(value);  
}

const str1 = "Jagjit"
for (const val of str1) {
    console.log(`Print each element of string : ${val}`);
}
//--------------------forof in map------------------------
const map = new Map()
map.set('IN',"India")
map.set('USA',"USA")
map.set('EU',"Europe")

console.log(map);
for (const [key,val] of map) // you name nultiple element in [] this box
{
    console.log(key," : ",val);
}

//---------------------Forin loop------------------------------------------------------------

const obj1 = {
    'Team 1' : 'PBKS',
    'Team 2' : 'LSG'
}// object retreve by forin loop  

for (const key in obj1) {
    // console.log(key); only key print
    // console.log(obj1[key]); only key values print

    console.log(`${key} : ${obj1[key]}`);
}


