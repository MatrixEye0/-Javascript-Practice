//Lexical scope means a function can access variables from the scope where it was defined not wher it call.
// Lexical scope is the foundation of closures
// closure is a function that remembers the variables from its lexical (outer) scope even after the outer function has finished executing
// cloures Keeps those variables alive after the outer function finishes

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