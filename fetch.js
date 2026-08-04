// fetch has higher priority when to execution

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json()) // Convert response to JSON
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Error:", error);
  });

//------------------in async and await style----------------------------------------------------------

async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getUser();