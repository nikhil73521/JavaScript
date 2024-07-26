// array

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const myHeros = ["Shaktiman", "Spiderman"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);

// Array methods

/* myArr.push(9) // Add to end 
myArr.pop() // Delete from ent & Returns it
myArr.pop()
myArr.pop()

myArr.unshift(9) // add to start 

myArr.shift() // delete from start & return it
*/

 /* console.log(myArr.includes(2)); //  search for a value
console.log(myArr.indexOf(3)); // returns index of something
*/

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myArr);