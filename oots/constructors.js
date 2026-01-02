object1={
    username:"gautam",
    gmail:"abc@exampple.com",
    mobile:7982459932,
    getusername:function(){
        console.log(this.username);
        
    }
}
console.log(object1.getusername());

function func(username,gmail,mobile){
    this.username=username
    this.gmail=gmail
    this.mobile=mobile
    this.greeting=function(){
        console.log(`hello ${this.username}`);
        
    }
    return this
}
const obj1= new func("manas","manas@example.com",73124462)
console.log(obj1);
console.log(obj1.constructor);

function mulby5(num){
    return num*5
}
mulby5.power=2
console.log(mulby5(5))
console.log(mulby5.power)

function createuser(name,score){
    this.name=name
    this.score=score
}
const obj2=new createuser("gautam",25)
createuser.prototype.increment=function(){
    this.score++
}
createuser.prototype.printscore=function(){
    console.log(`the score is ${this.score}`)
}
obj2.increment()
console.log(obj2.score);
console.log(obj2.printscore());
