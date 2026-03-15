import { calculateWinner, isDraw } from './logic.js';

// Creates the Box component 
const Box = ({handleClick,box,i}) => {
  return <button className='box' onClick = {() => {handleClick(i)}}>{box[i]}</button>
}

// Creates the board using two loops
const makeBoard = (handleClick,box)=>{
    let board = Array(3).fill(Array(3).fill(null)); //Creates an array of arrays which will be filled with boxes
    let table = board.map((row, rowNo) => { //Loops for each row 
        const index = rowNo*3; // Gets the number that identifies the first button on each new row

        let newRow = row.map((r, boxNo) => { // Loops for each button in a row
          return <Box key = {index+boxNo} handleClick={handleClick} box={box} i = {index + boxNo} /> // Calls the box component
        })

        //Prints a new row each time
        return <div key={rowNo} className='boardRow'>
            <h2>{rowNo+1}</h2>{newRow}
        </div>
    })
    return table; //Returns the complete board
}


// Component that controls the board
const Board = ({XToPlay,box,onPlay}) => {

  const handleClick = (i) => { // Handles all activities that happen when you click a box
  // Copies the current moves on the board to another variable to allow for indirect manipulation of the moes while storing previous versions
    let nextBox = box.slice(); 
    if(nextBox[i] === null && calculateWinner(box) === null && isDraw(box) === false){ 
      // Checks if the game is at the end and if there's no character in the space clicked
      nextBox[i] = XToPlay === true ?  "X" :  "O" //Decides the character to be displayed
      onPlay(nextBox); // This function handles storing all previous moves and adding present moves and keeping track of where we are in time
    }
  } 

  const winner = calculateWinner(box) // Gets the winnner (null if there isn't)
  const status = winner ? `Winner: ${winner}`: isDraw(box)? "DRAW!!" :`Player: ${XToPlay === true ?  "X" : "O"}`
  // First checks if there's a winner. If there's no winner it checks if it's a draw

  // Returns the full functioning board plus an updating status.
  return <div className='board'> 
    <div className='status'>{status}</div>
    <div>
    <div className='columnNo'><h2>1</h2><h2>2</h2><h2>3</h2></div>
    {makeBoard(handleClick,box)}
    </div>
  </div> ;
}

export default Board;