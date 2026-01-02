// // const arr=["spidey","hulk","ironman"]
// // Array.prototype.printname=function(){
// //     console.log("my name is gautam raj singh");
// // }
// // arr.printname()

// const str="Gautam"
// String.prototype.add=function(){
//     console.log(this.concat("raj"));
//     console.log(this);
    
// }
// str.add()
// const school={
//     name:"gautam",
//     class:"10D"
// }
// const college={
//     name:"gouri",
//     classs:"11A",
//     __proto__:school
// }
// console.log(college.class);
const school2={
    name:"gautam",
    class:"10D"
}
const college2={
    name:"gouri",
    classs:"11A",
}
Object.setPrototypeOf(college2,school2)
console.log(college2.class);


// // let str="hi     "
// // String.prototype.truelength=function (){
// //     const len=this.trim().length
// //     console.log(len)
// // }
// // str.truelength()