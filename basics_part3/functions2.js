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