/**
 * Exercise 1 — ES6+ Refactor (step-by-step)
 *
 * Goal:
 * - Replace var with let/const
 * - Replace for-loops with array methods
 * - Use template literals + destructuring
 *
 * Run:
 *   node exercises/ex1-refactor.js
 */

// Legacy code (works, but we want to modernize it)
function printPassedStudentsLegacy(students) {
  let passed = [];
  for ( i = 0; i < students.length; i++) {
    if (students[i].score >= 60) {
      passed.push(students[i]);
    }
  }

  for (var j = 0; j < passed.length; j++) {
    console.log("Student " + passed[j].name + " passed with " + passed[j].score);
  }
}

const students = [
  { name: "Amina", score: 78 },
  { name: "Bola", score: 55 },
  { name: "Chidi", score: 92 },
  { name: "Dami", score: 64 }
];

console.log("\n=== Part A: confirm legacy output ===");
printPassedStudentsLegacy(students);

console.log("\n=== Part B: TODO — implement modern version ===");
const printPassedStudentsModern = (students) => {
  students.filter(({score})=> score >= 60).forEach(({name,score}) => console.log(`Student ${name} passed with ${score}`));
}

printPassedStudentsModern(students);

