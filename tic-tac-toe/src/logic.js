export const calculateWinner = (box) => { // Calculates the winner
  const wins = [ //stores the winning combinations
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  let won = null;
  wins.forEach(([a,b,c])=>{ 
    if (box[a] && box[a] === box[b] && box[a] === box[c]) 
      // Checks if any of the combinations in won is currently filled with the same character
    {
        won = box[a]; // Declares that cjharacter as the winner 
        [a,b,c].forEach(i => document.getElementsByClassName('box')[i].classList.add("won")); 
        //Turns the winning combination green with a class style
    }
  })
  return won;
}

export const isDraw = (box) => { // Checks for a draw
    if (box.every((square) => square != null))
      // It is a draw if all the squares are filled and winner is null(the winner case will be checked in Board.jsx)
        return true;
    else
        return false;
}