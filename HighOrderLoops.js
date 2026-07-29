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

//----------forin in Array------>> array also have key value which default start from 0 and go to infinite number-------------------

const arr = ["Js","C++","Java","Python"]
for (const key in arr) {
    console.log(`key is ${key} and its value is : ${arr[key]}`);
}   

//-----------------------------------Foreach----------------------------------------------------------------------------------------------

const games = ['Cricket','Football','Tennis','Hockey','Basketball']
games.forEach( function(value,index,array) /* this is callback function that's why they have no name 
                                             here value is array value , index is array index , array is whole aray */
{
   console.log(value);
   console.log(value,index,array);// give value, index number, return whole array which the value part of this 
})

// -------- foreach in object inside array 
// forEach() runs once for each object that's why this give output is javascript & undefine because py not define.
const obj2 = [ {js:'javascript'},{py:'python'}]

obj2.forEach( (val)=>{
    console.log(val.js);
});

// here it give proper key value 

const obj3 = [ {Language:'javascript',ext:'js'}, {Language:'python',ext:'py'}]

obj3.forEach( (val)=>{
    console.log(val.Language);
})