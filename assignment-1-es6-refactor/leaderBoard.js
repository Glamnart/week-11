export function leaderBoard(students) {

  let remaining = [...students];
  const board = [];

  while (remaining.length > 0) {

    // Looks for the highest score
    const bestScore = remaining.reduce(
      (max, { score }) => Math.max(max, score),
      0
    );

    // Finds the student who has the highest score
    const bestStudent = remaining.find(
      ({ score }) => score === bestScore
    );

    //Push it to Leader board
    board.push(bestStudent);

    // Removes it from the array so that we can find the next highest 
    remaining = remaining.filter(
      ({ score }) => score !== bestScore
    );
  }

  // Prints it
  board.map(({name,score}) => console.log(`> ${name} (${score})`));
}