const PromiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 1 completed");
        resolve()
    }, 1000)
})

PromiseOne.then(function(){
    console.log('Async 1 is resolved');
    
})

// we can use a promise without storing it in a variable as well

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is completed");
        resolve({username: "Raghav", email: "gabasraghav2016@gmail.com"})
    },1000)
}).then(function(user){
    console.log(user);
})
