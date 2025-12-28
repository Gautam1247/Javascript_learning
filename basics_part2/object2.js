const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: { userfullname: {
            firstname: "gautam",
            lastname: "raj singh"
        }
       
    }
}

console.log(regularUser.fullname.userfullname.firstname);
const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

const obj3=Object.assign({},obj1,obj2) //first arg {} is the target and rest are source so we combine both the objects into an empty object
console.log(obj3);
console.log(obj1===obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email);
 
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //returns key in the form of array
console.log(Object.values(tinderUser)); //returns values in the form of array
console.log(Object.entries(tinderUser)); //returns values in the form of array

console.log(tinderUser.hasOwnProperty('id')); //checks whether the key is present in the object or not
