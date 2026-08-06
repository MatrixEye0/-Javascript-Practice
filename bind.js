/*
 The bind() method in JavaScript creates a new function that,when executed, 
 forces its internal this keyword to point to a specific, pre-assigned object.Unlike call() and apply(),
 bind() does not immediately execute the function; it saves it for execution later
 */

const user = {
  name: "Jagjit Singh",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

// Lost context: output is undefined because "this" defaults to global or undefined
setTimeout(user.greet, 1000); 

//  Fixed: Explicitly bind the context to the "user" object
const secureGreet = user.greet.bind(user);
setTimeout(secureGreet, 1000); 
