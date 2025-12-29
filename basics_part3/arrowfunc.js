const user={
    username:"gautam",
    price:99,
    welcomemessage: function(){
        console.log(`Hello ${this.username}`)
        console.log(this)
    }
}
user.welcomemessage()
user.username="sam"
user.welcomemessage()
console.log(this)
function chai(){
    let username='gautam'
    console.log(this.username)//this only works on objects not in standalone functions
}
chai()

//ARROW FUNCTION
const chai = ()=>{
    let username='gautam'
    console.log(this)//this only works on objects not in standalone functions
}
chai()

//IMPLICIT RETURN
const add2num=(num1,num2)=> num1+num2
console.log(add2num(3,4))

//EXPLIXIT RETURN
const add2num2=(num1,num2)=>{ return num1+num2}
console.log(add2num2(3,4))

//For objects, you have to wrap the return thing with paranthesis otherwise it would not return 'undefined'
let func=()=> ({username:'gautam'})
console.log(func())