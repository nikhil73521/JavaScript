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