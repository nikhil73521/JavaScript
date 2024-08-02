const course = {
    coursename: "js course",
    price: "999",
    courseInstructor: "nikhil"
}
    
// course.courseInstructor

const { courseInstructor: instructor } = course
console.log(instructor);
// console.log(courseInstructor);
