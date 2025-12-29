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
for (const key in jsuser) {
   // console.log(key);
}
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key); //for in does'nt work on maps as keys of maps can be of any datatype and hence are not iterable
}