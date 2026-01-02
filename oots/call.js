function func2(username){
    this.username=username
}
function func1(username,email,age){
    func2.call(this,username)
    this.email=email
    this.age=age
}
const obj1=new func1("gautam","g@12mail.com",20)
console.log(obj1)