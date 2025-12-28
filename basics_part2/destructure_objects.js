const mysym=Symbol("mykey1")
const obj1 = {
  name: "Gautam",
  "full name": "gautam raj singh",
  age: 20,
  [mysym]: "mykey1",
  location: "Jaipur",
  email: "gautam@google.com",
};
const {name}=obj1
console.log(name);
const {location:x}=obj1
console.log(x);
const {[mysym]:y}=obj1
console.log(y);

