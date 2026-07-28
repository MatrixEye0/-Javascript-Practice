 const marks =100

 if (marks>=100){
    console.log("Topper");
 } else {
    console.log("Average");
 }

 const userLog = true
 const card = true
 if(userLog && card){ // &&  they check both condition if both true they execute ortherwise no
    console.log("Valid User");
 }

 const userLogYt = true
 const LogfromAmazone = false
 if(userLogYt || LogfromAmazone){ // ||  they check aany one condition is true they executed
    console.log("Valid User");
 }

//------------------ null undefine operator -------------------

/*?? this operator return first value but in case first value is null or undefine
 they return next valid value. you write like (null ?? 7) this and (null ?? 5 ?? 9) like this.
 use when we call to DB but they return nothing so we make sure code not show problem 
 thats why we use this like (DB call null ?? function)*/


 let val1;
 // val1 = 5 ?? 10; 5 return 
 val1 = null ?? 15 // 15 return
 console.log(val1);

 //--------------------------Terniary Operator----------------------------------

 const price = 100
 price>=120 ? console.log("Expensive") : console.log("Chep");
 
 
 //------------------------------------switch-------------------------------------

 const age = 22 // any datatype can be use
 switch(age){
    case 20:
        console.log("Age is 20");
    break;
    case 21:
        console.log("Age is 21");
    break;  // if break not here and case 21 true so they execute all case after case 21 except default
    case 22:
        console.log("Age is 22");
    break;

   default : console.log("Age not match"); //if nothing match then default executed
   
   break;     
 }

 //---------------------------------------------------------------------------------

 const obj = {}
 if (Object.keys(obj).length===0){
    console.log("Empty object");
    
 }

 // true values = "0"," ",'false',[],{},function(){}
 // false values = 0,"", -0, BigInt 0n, NaN, unefine, Null