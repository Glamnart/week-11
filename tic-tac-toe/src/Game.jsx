import { useState } from 'react'
import Board from "./Board.jsx";
import './Game.css'

export default function Game(){ 
  const [history,setHistory] = useState([Array(9).fill(null)]); // Initialises use state for history and fills it with the first ever moves (no moves)
  const [currentPlay,setCurrentPlay] = useState(0) // Initialises use state for currentPlay and sets it to 0 which is the point we are at (Beginning)

  const XToPlay = currentPlay % 2 === 0 // Makes sure that the status says X is to play every 2 plays
  const currentBoxes = history[currentPlay]; //Makes sure the play on the board is the same as the timeline we are in 
  

  //Calls everytime you play
  function handlePlay(nextBoxes){ 
    const newHistory = [...history.slice(0,currentPlay + 1),nextBoxes] // Copies the old history into a temp store then adds the current board state to it
    setHistory(newHistory); // Changes history to the values in the temp store
    setCurrentPlay(newHistory.length - 1); // Moves the timeline forward
  }

  function jumpTo(moveNo){ // Handles jumping throught time
    history[0].forEach((hist,i) => document.getElementsByClassName('box')[i].classList.remove("won"))
    //Removes green background when you jump back in time
    setCurrentPlay(moveNo) // Moves the timeline to desired time
  }

  const moves = history.map((boxes, moveNo) => { // Handles display of buttons for jumping timeline
      let description, position, lastClicked;
      const positions =[ // Stores the position of a button with the corresponding index
      "(1,1)","(1,2)","(1,3)","(2,1)","(2,2)","(2,3)","(3,1)","(3,2)","(3,3)"
      ]

      if (moveNo > 0) { //If not first move
        description = `Go to move ${moveNo}` 

        // Finds the move that was played last by comparing the previous state of the board to the current state of the board
        boxes.find((box,i) => {
          lastClicked = i;
          return box != history[moveNo-1][i]
        })

        // Gets the position of last move
        position = positions[lastClicked];
      }
      else
      {
        description = "Go to game start";
        position = "(row,column)"; // Just says this since no previous move was made
      }
         

      return <li key={moveNo}><button onClick={() => {jumpTo(moveNo)}}>{description}</button><p>{position}</p></li> // Prints the list of the buttons
  })

  //returns the whole game structure
  return<div className='game'>
    <div className='gameBoard'><Board XToPlay={XToPlay} box={currentBoxes} onPlay={handlePlay}/></div>
    <div className='gameInfo'>
      <ul>{moves}</ul>
    </div>
  </div> 
} 