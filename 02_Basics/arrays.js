// array

// const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// const myHeros = ["Shaktiman", "Spiderman"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

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

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// slice, splice


// let colors = ["red", "yellow", "blue", "orange", "pink", "White"];
// console.log(colors.slice(2));

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Nikhil"));
console.log(Array.from("Nikhil"));

console.log(Array.from({ name: "Nikhil" })); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));