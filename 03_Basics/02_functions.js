function calculateCarPrice(...num1) { // ... Rest and Spread Operator
    return num1
}

// console.log(calculateCarPrice(200, 400, 500, 2000));

const user = {
    username: "nikhil",
    prices: 199
}

function handleObject(anyobject) {
      console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    usernaem: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));