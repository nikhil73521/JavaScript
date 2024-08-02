// function sayMyName() {  // function keyword and sayMyName functions name curly syntax
//     console.log("N");
//     console.log("I");
//     console.log("K");
//     console.log("H");
//     console.log("I");
//     console.log("L");
// }
// sayMyName()  //sayMyName Reference and () execution


// function addTwoNumber(number1, number2) { // number 1 and number 2 parameters 
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {

    let result = number1 + number2
    // console.log("nikhil");
    return result
    console.log("nikhil"); // not print 
}

const result = addTwoNumber(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username) {
    return `${username} just logged in`
}

// console.log(loginUserMessage("nikhil"));

console.log(loginUserMessage());