class Teacher{
    constructor(username){
        this.username=username
    }
    static printme(){
        console.log(`my name is ${this.username}`);
        
    }
}
const obj1=new Teacher("Gautam")
obj1.printme()