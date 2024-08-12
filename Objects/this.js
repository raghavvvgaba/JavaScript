/* this - reference to the object where THIS is used 
        (the object depends on the immediate context)*/

const person1 = {
    name: "Spongebob", 
    favFood: "Harmburgers", 
    sayHello: function() {console.log(`Hello, my name is ${this.name}`)},
    eat: function() {console.log(`I eat ${this.favFood}`);
    }
};
const person2 = {
    name: "Patrick", 
    favFood: "Pizza", 
    sayHello: function() {console.log(`Hello, my name is ${this.name}`)},
    eat: function() {console.log(`I eat ${this.favFood}`);
    }
};
person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat();