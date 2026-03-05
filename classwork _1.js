const students = [
  { name: "Amina", score: 45, submitted: true },
  { name: "Bola", score: 76, submitted: false },
  { name: "Chidi", score: 92, submitted: true },
  { name: "Dami", score: 99, submitted: true },
];

/*CLASS WORK: ARRANGE THE STUDENTS IN LEADERBOARD*/

const LeaderBoard = students.sort(student => -student.score );
console.log(LeaderBoard);