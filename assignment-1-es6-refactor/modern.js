//  Import the array of objects holding student's information
import { students } from "./students.js";

//Gives students who passed
console.log("Passed:");
let passMark = 70;
students.filter(({score}) => score >= passMark)
        .map(({name}) => console.log(`> ${name}`));

