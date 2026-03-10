//  Import the array of objects holding student's information
import { students } from "./students.js";

//Gives students who passed
console.log("Passed:");
let passMark = 70;
students.filter(({score}) => score >= passMark)
        .map(({name}) => console.log(`> ${name}`));

import { bestStudent, average } from "./utilities.js";

//Gives best student
console.log("\nBest Student:");
console.log(`> ${bestStudent(students)}`)


//Gives class average
console.log("\nClass Average =");
console.log(average(students).toFixed(2));


import { leaderBoard } from "./leaderBoard.js";

//Class leader board 


console.log("\nClass Leaderboard:")
leaderBoard(students);