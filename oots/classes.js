class school{
    constructor (username,email,pass){
        this.username=username
        this.email=email
        this.pass=pass
    }
    encrypt(){
        return `${this.pass}abc`
    }
}
const obj1=new school("gautam","gautam@gmail.com","gautam")
console.log(obj1.encrypt())