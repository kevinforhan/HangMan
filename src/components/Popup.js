import React, { useEffect } from 'react'
import {checkIfWon} from "../Helpers/Helpers"

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable }) => {
  let finalMessage = '';
  let finalMessageWord = '';   
  let playable = true; 


  if ( checkIfWon(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulations! You won! 😃'; 
    playable = false; 
  } else if ( checkIfWon(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageWord = `...the word was: ${selectedWord}`;
    playable = false;
  }


  useEffect(() => setPlayable(playable)); //changing the playable from true to false 
  return (
        <div class="popup-container" style={finalMessage !== '' ? {display:'flex'}: {}}>
          {/* ^^if game over, display flex final message */}
        <div class="popup"> 
          <h2>{finalMessage}</h2>
          <h3>{finalMessageWord}</h3>
          <button>Play Again</button>
        </div>
      </div>
    )
}

export default Popup