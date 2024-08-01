// Singleton

// object literels

const mysym = Symbol("key1")


const JSUser = {
    name: "Nikhil",
    "full name": "Nikhil Gupta",
    [mysym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "nikhil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser["full name"]);
// console.log(JSUser[mysym]);

JSUser.email = "nikhilchatgpt.com"
// Object.freeze(JSUser) // Freeze the email.Value can't change
JSUser.email = "nikhilmicrosoft.com"

// console.log(JSUser);

JSUser.greeting = function () {
    console.log("Hello JS User");
}

JSUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());