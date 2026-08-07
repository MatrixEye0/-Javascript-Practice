/*
Event Loop is a mechanism that continuously checks:
Is the Call Stack empty?
If yes, move a callback from the Callback Queue (or Microtask Queue higher priority than callback ex- promis.then()) 
to the Call Stack and execute it.
callback queue me web api(jo function js me browser se ata hai na ki JS ke khud ke hote hai 
ex- setTimeout , setInterval) add hoti hai

Synchronous Code
       │
       ▼
  Call Stack
       │
       ▼
Async code like Web APIs (setTimeout, fetch, DOM events)
       │
       ▼
 Callback Queue
       │
       ▼
   Event Loop checkc
       │
       ▼
Moves callback to Call Stack (when empty)

call() => Invokes the function immediately.
apply() => Like call(), but arguments are passed as an array.
bind() => Returns a new function with this permanently set. It does not execute immediately.

*/