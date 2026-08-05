// constructor delacre by new keyword and and constructor give new instance of copy
function user (username,age,topic){
    this.username= username;
    this.age=age;
    this.variable=topic
    return this
}
const u1 = user('Jagjit',12,'object')
const u2 = user('Jagjit singh',22,'objects')
console.log(u1) // u2 overright u1 value because new keyword not declare 

const u3 = new user('Jagjit',12,'object')
const u4 = new user('Jagjit singh',22,'objects')
console.log(u3)//now u4 not overright u3

//new create first empty object and call constructor function and pass on agr value