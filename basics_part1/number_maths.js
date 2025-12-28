const score=300
const balance =new Number(123.845)
console.log(balance);
console.log(score.toString());
console.log(balance.toString());
console.log(balance.toPrecision(3));
str2=100000
str3=str2.toLocaleString("en-IN")
console.log(str3);

console.log(Math.abs(-4));
console.log(Math.round(4.8));
console.log(Math.floor(4.8));
console.log(Math.ceil(4.8));

console.log(Math.max(3,4,5,6));
console.log(Math.min(3,4,5,6));

console.log(Math.random()*10);//gives values between 0 and 10(excluded)
console.log((Math.random()*10)+1);//gives values between 1 and 11(excluded)
console.log(Math.floor(Math.random()*10));//gives integer values between 0 and 9(included)

const min=10
const max=20 
console.log(Math.floor(Math.random()*(max-min+1)+min));//returns an integer value between min and max (
// both included)



