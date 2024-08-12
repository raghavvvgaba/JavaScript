// callback -> a function that is passed on to another function as an argument

// used to handle asynchronous operations: 
// 1. Reading a file 
// 2. Network requests
// 3. Interacting with databases

// "When you're done, call this next"



function hello(callback){
    setTimeout(function(){
        console.log('Hello');
        callback();
    }, 2500);
}

function goodbye(){
    console.log('Goodbye');
}

hello(goodbye);

