const arr1=[1,2,3,4,5,6,7]
const initial=10
const cf=arr1.reduce((x,y)=>x+y,initial)
console.log(cf)

const shoppingcart=[{
    itemname:'jscourse',
    price:299,

},
{
    itemname:'javacourse',
    price:400,
    
},{
    itemname:'flutter course',
    price:300,
    
},{
    itemname:'ds course',
    price:800,
    
}]
let init=0
const totalprice=shoppingcart.reduce((x,y)=> x+y.price,init)
console.log(totalprice);
