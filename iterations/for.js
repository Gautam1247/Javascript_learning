let arr=[0,1,2,3,4,5]
for (let index = 0; index < 5; index++) {
    //console.log(arr[index])
}
for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}
for(let i=1;i<10;i++){
    if(i==5){
        console.log('5 is best');
        continue
    }
    console.log(`${i}`)
}