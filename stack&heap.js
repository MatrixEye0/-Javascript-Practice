let myname = "Jagjit"
let anothername =myname //again use value of myname store copy of myname //
anothername="Founder"
console.log(myname)
console.log(anothername) /*stack use in primitive datatype string number bigint boolean undefined symbol null
                          in anothername they store copy of myname not original thats why when console
                        they show myname same but anothername change because copy change not original*/

let user={
    email:"jsemal.com",
    id:"789"  /*user store in stack but user data inside{} store in heap & user2 also store in stack
           but when we set user2 as user one so both target and refer same user value in heap*/ 
}
let user2=user //array object function non primitive they store in heap. heap not do copy of variable they make refferance of it//
console.log(user)
console.log(user2)
user2.email="gemail.com"//change in original user because they reffer it//
console.log(user)
console.log(user2)// now both original and user2 both change //