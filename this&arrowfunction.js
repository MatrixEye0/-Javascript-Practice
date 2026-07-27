const user={
    name:"Jagjit",
    city:"New York",
    age:22,

    welPage: function(){
        console.log(`${this.name}  welcome to website`);// this reffer current context
        // console.log(this); here they return user obj
        
    }
}

user.welPage()
user.name ="Mr.Singh"
user.welPage()/*here value change to mr.singh because welpage has current context
               means jo abhi current value assign hai wahi show hoga because of this function.*/

// console.log(this); here they return  empty object               

function testThis(){
    let test ="JS"
    console.log(this.test);// not run because this keyword run in object not in function
}
testThis()

//--------------------  Arrow  ---------------------------

const arrowtest =()=>{
    let test ="JS"
    console.log(this)//give empty object
}
arrowtest()

const arrowtest2= (num1, num2)=>{
    return num1 + num2
}
// const arrowtest2= (num1, num2) => num1+num2;  in this way they also run.obj run when they write inside (obj)
console.log(arrowtest2(5,8))