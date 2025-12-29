if(true){
    let a=30
    console.log(a);
}
console.log(a);

function one() {
  const username = "gautam";
  function two() {
    var website = "chess";
    console.log(username); //two() can access username
  }
  console.log(website); //website not accessible to one()
  two();
}
one();
//inner function can access the variables of outer function but not vice-versa
//same thing happens with if and else statements
if(true){
    const x=6
    if(true){
        const y=9
        console.log(x);
        

    }
    console.log(y);
    
}

//Hoisting-> functions can be called before their declaration
console.log(func1(1))
function func1(num){
    return num+1
}

//But hoisting cannot be done if the function is stored in a variable
console.log(func1(4));
let func1=function (num){
    return num+1
}
