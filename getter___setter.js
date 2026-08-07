// Getter and Setter are special methods that let you control how object properties are read and written.
//Getter (get) → Runs when you read a property.
//Setter (set) → Runs when you assign a value to a property.

// useful for: Validating data, Formatting values, Calculating values dynamically, Protecting private data


class user {
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get password(){ // to acces value outside class
        return this.__password.toUpperCase()// agar yaha password likhte to upper password me or isme race hoti jo call stack fill kar deta thats why we assign new name to it
    }
    set password(value){ // get set write both tabhi code chalega
               this.__password= value.toUpperCase()
    }
}

const test = new user('@gmail.com','kljh')
console.log(test.password);

//------------------------------------------------------------------------------------------------------

class Account {
    constructor() {
        this._password = "";
    }
    set password(value) {
        if (value.length < 8) {
            console.log("Password is too short");
            return;
        }
        this._password = value;
    }
    get password() {
        return "********";
    }
}

const acc = new Account();
acc.password = "123";
acc.password = "Hello123"; // pasword show ******** they hide it.
console.log(acc.password);
