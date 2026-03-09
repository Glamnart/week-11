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

//Gives best student 
console.log("Best Student:");

let bestStudent, bestScore;
for (let i in students){
   if (i == 0){
    bestScore = students[i].score 
    bestStudent = students[i].name
   }
   else 
    {
        if (students[i].score > bestScore)
        {
            bestScore = students[i].score 
            bestStudent = students[i].name
        }
        else
            continue;
    } 
}
console.log("> " + bestStudent);

console.log(" ");

//Gives class average
console.log("Class Average =");

let average = 0;
for (let student of students){
    average += (student.score/students.length);
}
console.log(average.toFixed(2));

console.log(" ");

//Class leader board 
console.log("Class Leaderboard:")

let stored;

// Bubble sort
for(let j = 0; j < students.length;){
    for (let i = 4; i > j; i--){
      if (students[i-1].score < students[i].score)
      {
        stored = students[i]
        students[i] = students[i-1]
        students[i-1] = stored
      }
      else 
        continue;
    }
    j++;
}

for(let student of students)
{
    console.log("> " + student.name + " (" + student.score + ")");
}