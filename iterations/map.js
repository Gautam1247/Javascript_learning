const numbers=[1,2,3,4,5,6,7,8,9,10]
const newnums=numbers.map((num)=>num+10)
console.log(newnums);

//using both map and filter
const numbers2=[1,2,3,4,5,6,7,8,9,10]
const newnums2=numbers2.map((num)=>num+10).filter((num)=>num>15)
console.log(newnums2)