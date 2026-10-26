function setUser(name){
this.name= name
console.log('Call');
}
function create(name,role,company){
    setUser.call(this,name)// if we call name from other function so it call by .call keyword 
                          //it use when we outsource some work outside funtion .call hold the referance of function
                         // this give current contex of the name. without this name not print 
                         // setUser.call(this, name) mein this current create() object ko refer karta hai. .call() usi object ko setUser() ke andar bhi this bana deta hai.
    this.role=role
    this.company=company
}
const check = new create('Jagjit','CEO','Jagjit Software')
console.log(check);
