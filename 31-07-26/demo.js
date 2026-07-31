const student={
    name: "John",
    age: 20,
    major: "Computer Science"
}
const newstudent = {...student, sec: "A"}
console.log("new object name=",newstudent.name)
console.log(newstudent.age)
console.log(newstudent.major)
console.log(newstudent.sec)