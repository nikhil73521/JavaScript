// Primitive

// 7 types : string, Number, Boolean, null, undefined, symbol, BigInt

const score =100

// Reference :Non-primitive

// Array, Objects, Functions

const idLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345654516545n

// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"]
// let myObj = {
//     name: "Nikhil"
//     age: 22,
// }

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);




//*****************Stack and Heap *****************/

let myLinkedInname = "Nikhil Kumar"
let anothername = myLinkedInname
anothername = "Nikhil Gupta"

console.log(myLinkedInname);
console.log(anothername);

let userOne = {
    email: "kumarnikhil735214@gmail.com"
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "kumarnikhil735214@gmail.com"

console.log(userOne,email);
console.log(userTwo.email);
