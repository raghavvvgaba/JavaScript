/*Callback Hell 
Situation in which a lot of callbacks are nested within other callbacks. It makes the code difficult to manage and read
Callbacks is an old way of handling async functions
New ways are promises and async/await  */


// Example of callback hell

// function task1(callback) {
//     setTimeout(() => {
//         console.log('Walking the dog');
//         callback();
//     }, 2500);
// }
// function task2(callback) {
//     setTimeout(() => {
//         console.log('Cleaning the room');
//         callback();
//     }, 1500);
// }
// function task3(callback) {
//     setTimeout(() => {
//         console.log('Taking out the trash');
//         callback();
//     }, 500);
// }

// task1(() => {
//     task2(() => {
//         task3(() => {
//             console.log('All tasks are completed');

//         })
//     })
// })


//writing these functions with promises

function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;
            if(dogWalked)
                resolve('Walking the dog');
            else
            reject('You did NOT walk the dog');
        }, 2500);
    });
}
function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanKitchen = true;
            if(cleanKitchen)
                resolve('Cleaning the kitchen');
            else
            reject('You did NOT clean the kitchen');
        }, 1500);
    });
}
function task3() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const trashOut = false;
            if(trashOut)
            resolve('Taking out the trash');
            else
            reject('You did NOT take out the trash');
        }, 500);
    });
}

task1().then(value =>{console.log(value);
    return task2();
})
    .then(value => {console.log(value);
        return task3();
})
    .then(value =>{console.log(value);
        console.log('All tasks are completed');
    })
    .catch(error => {console.log(error)});