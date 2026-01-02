const Promiseone=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve()
        console.log("async completed")
    },1000)
})
Promiseone.then((resolve)=>{
    console.log("promise executed")
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve()
        console.log("async completed")
    },1000)
}).then((resolve)=>{
    console.log("promise executed")
})

const Promisethree=new Promise((resolve,reject)=>{
    const error=false
    setTimeout(()=>{
    if(!error){
        resolve({username:"gautam",id:"gautam@example.com"})
    }
    else{
        reject()
    }
})})
Promisethree.then((data)=>{
    return data.username
}).then((user)=>{
    console.log(user)
}).catch((error)=>{
    console.log("something went wrong")
})

const Promisefour = new Promise((resolve, reject) => {
  const error = true;
  if (!error) {
    resolve({ username: "gautam", id: "gautam@example.com" });
  } else {
    reject("Something went wrong");
  }
});

async function func() {
  try {
    const name = await Promisefour;
    console.log(name);
  } catch (error) {
    console.log(error)
  }
}
func()