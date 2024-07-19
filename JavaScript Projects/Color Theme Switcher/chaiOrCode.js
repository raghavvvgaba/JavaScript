

let screen = document.body.style.backgroundColor;
let box_one = document.getElementById(".box1").style.backgroundColor
let box_two = document.getElementById(".box2").style.backgroundColor
let box_three = document.getElementById(".box3").style.backgroundColor
let box_four = document.getElementById(".box4").style.backgroundColor
 
box_one.addEventListener("click",()=>{
    screen = box_one
})
box_two.addEventListener("click",()=>{
    screen = box_two
})
box_three.addEventListener("click",()=>{
    screen = box_three
})
box_four.addEventListener("click",()=>{
    screen = box_four
})



// ++++++++++++++++++++++++ Correct solution from Chai or Code +++++++++++++++++++++


// console.log("hitesh")
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//     console.log(button);
//     button.addEventListener('click', function (e) {
//         if (e.target.id === 'grey') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'white') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'blue') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'yellow') {
//             body.style.backgroundColor = e.target.id;
//         }

//     });
// });

