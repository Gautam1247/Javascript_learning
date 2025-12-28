const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')
str2="xnasjcx"
console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName.concat(str2));


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)//substring me negative number nhi de ssakte hai
console.log(newString);

const anotherString = gameName.slice(-8, 4)//slice me negative number de ssakte hai
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('su'))

console.log(gameName.split('-',5))