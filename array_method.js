const students = [
  { name: "Amina", score: 78, submitted: true },
  { name: "Bola", score: 55, submitted: false },
  { name: "Chidi", score: 92, submitted: true },
  { name: "Dami", score: 64, submitted: true },
]; 

console.log(students.some(student => !student.submitted))

console.log(students.every(student => student.submitted))

const totalScore=students.reduce((totalScore, student) => totalScore  + student.score, 0 );
const average = totalScore / students.length;

console.log(average);