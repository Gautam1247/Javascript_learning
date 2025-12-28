//object literals
const mysym=Symbol("mykey1")
const jsuser={
    name:"Gautam",
    "full name":"gautam raj singh",
    age: 20,
    [mysym]: "mykey1",
    location: "Jaipur",
    email: "gautam@google.com",
    lastLoginDays:["Mon","sat"]
}

console.log(jsuser.email)
console.log(jsuser['age'])

console.log(jsuser['full name']) // can be accessed by this syntax only
console.log(jsuser[mysym])
console.log(typeof mysym);

jsuser.email="chatgpt@gmail.com"
//Object.freeze(jsuser) // blocks the object from any changes
jsuser.email="microsoft@gmail.com"
console.log(jsuser.email);
console.log(jsuser)

jsuser.greeting=function(){
    console.log("Hello world! ");
    
}
jsuser.greetingtwo=function(){
    console.log(`Hello ${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
console.log(jsuser);



