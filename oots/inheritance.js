class college{
    constructor(username){
        this.username=username
    }
    printme(){
        console.log(`my name is ${this.username}`);
        
    }
}
class school extends college{
    constructor(username,email,age){
        super(username)
        this.email=email
        this.age-age
    }
    printme(){
        console.log(`school is my class and name is ${this.username}`);
        
    }
}
const obj1=new school('gautam','abc@gmail.com',20)
obj1.printme()