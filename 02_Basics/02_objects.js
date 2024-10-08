// const tinderUser = new object() // SINGLETON OBJECT
const tinderUser = {} // NON SINGLETON OBJECT

tinderUser.id = "123abc",
tinderUser.name = "nikhil"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:
        {
            firstname: "nikhil",
            lastname: "kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)
// {} it is as a target , but obj1, obj2, obj3 as a source.

const obj3 = {...obj1, ...obj2}
console.log(obj3);
