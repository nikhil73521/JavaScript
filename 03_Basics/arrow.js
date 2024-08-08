const user = {
    username: "Nikhil",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} Welcome to website`);
        console.log(this);

    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "nikhil"
//     console.log(this.username);
    
// }
// chai()

const chai = function () {
    let username = "nikhil"
    console.log(this.username);
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

// *****OR******

// const addTwo = (num1, num2) => num1 + num2
// **** OR****
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4))
