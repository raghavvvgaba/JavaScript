const JsUser = {                // declaring an object
    username: "Raghav Gaba",
    email: "gabasraghav2016@gmail.com",
    age: 20,
    location: "Agra",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser[username]);   keys(elements) of objects cannot be accessed like this because they are recognised as strings
console.log(JsUser["username"]);  // This is the way to access it
