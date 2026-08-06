 // class is a blueprint for creating objects with predefined properties and methods. prototype method is old this is new way
class Car {
  // Constructor initializes properties
  constructor(brand, year) {
    this.brand = brand; 
    this.year = year;
  }

  // Instance method (action the object can take)
  drive() {
    return `${this.brand} is moving!`;
  }
}

// Creating an object (instantiation)
const myCar = new Car("Tesla", 2026);

console.log(myCar.brand); 
console.log(myCar.drive());

// declare private key ----------------------------------------------------------------------

class BankAccount {
  #balance; // Private field declaration

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  // Getter method to check balance safely
  get balance() {
    return `${this.#balance}`;
  }

  // Method to update private balance safely
  deposit(amount) {
    this.#balance += amount;
  }
}

const account = new BankAccount("Alice", 1000);
account.deposit(500);
console.log(account.balance); 
// console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class

// inheritance -------------------------------------------------------------------------------------

class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    return "Some generic sound";
  }
}

// Child Class inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent constructor
    this.breed = breed;
  }

  // Overriding parent method
  makeSound() {
    return "Woof!";
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.name);       
console.log(myDog.makeSound()); 

// static method---------------------------------------------------------------------------

class MathUtils {
   static PI = 3.14
  static calculateArea(radius)////When you write static, the property or method belongs to the class itself, not to objects
 {
    return this.PI * radius * radius;
  }
}

// Called directly on the class name
console.log(MathUtils.PI);                
console.log(MathUtils.calculateArea(10)); // here static call due to direct call from class.

const testStatic = new MathUtils('10')
console.log(testStatic.calculateArea);// now they not call because of static method

