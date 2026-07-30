function makeFunc() {
  const name = "Jagjit";// parent vlue
  function displayName() {
    console.log(name);// child value can access parent but parent not access child
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

// ----------counter example-----------------------

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const increment = counter()
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())