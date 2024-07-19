let adj={
    0:"crazy",
    1:"amazing",
    2:"Fire"
};

let name1={
    0:"engine",
    1:"foods",
    2:"garments"
};
let name2={
    0:"bros",
    1:"limited",
    2:"hub"
};
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(adj[getRandomInt(3)] +" "+ name1[getRandomInt(3)] +" "+ name2[getRandomInt(3)])


// for(i=0;i<3;i++){
//     for(j=0;j<3;j++){
//         for(k=0;k<3;k++){
//             console.log(adj[i] +" "+ name1[j] +" "+ name2[k])
//         }
//     }
// }
