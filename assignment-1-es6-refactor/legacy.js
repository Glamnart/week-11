// An array of objects holding student's information
const students = [
    {name: "Bethany", score: 76},
    {name: "James", score: 100},
    {name: "Badewa", score: 67},
    {name: "Mary", score: 44},
    {name: "Philip", score: 20}
]

//Gives students who passed
let passMark = 70;

console.log("Passed:");

for (let student of students){
    if (student.score >= passMark)
        console.log("> " + student.name);
}

console.log(" ");



